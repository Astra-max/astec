import pool from "../../config/dbConnect.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
import bcrypt from "bcrypt";
import { getUserById } from "../../repository/queries.js"

env.config();

export const userLogin = async (req, res) => {
  try {
    // modified email & passwd for jsparrow check later
    const { emailAddr, password } = req.body;
    if (!emailAddr || !password) {
      return res.json({ invalid: "Missing email or password" });
    }

    const userExists = await pool.query(
     getUserById,
      [emailAddr]
    );

    if (userExists.rows.length === 0) {
      return res.json({ invalid: "Email doesn't exist, sign up for account" });
    }

    const validPassword = await bcrypt.compare(
      password,
      userExists.rows[0].password
    );

    if (!validPassword) {
      return res.json({ invalid: "Invalid password, try again." });
    }

    const token = jwt.sign(
      { userId: userExists.rows[0].id, role: userExists.rows[0].role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Store token in secure HttpOnly cookie
    res.cookie("authToken", token, {
      httpOnly: true, // prevents JS access (XSS safe)
      secure: process.env.NODE_ENV === "production", // use HTTPS only in production
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res.json({
      userName: `${userExists.rows[0].firstname} ${userExists.rows[0].secondname}`,
      email: userExists.rows[0].email,
      role: userExists.rows[0].role,
      userId: userExists.rows[0].id,
      token,
      // no token in body anymore!
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ serverErr: 500 });
  }
};

export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(401);

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    console.log("requested refresh", newAccessToken);
    res.json({ accessToken: newAccessToken });
  });
};

export const userSignUp = async (req, res) => {
  const { firstName, secondName, email, passwd, role } = req.body;

  if (!firstName || !secondName || !email || !passwd || !role) {
    return res.status(403).json({ invalidCredsErr: "invalid credentials" });
  }

  try {
    const checkExists = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (checkExists.rows.length > 0)
      return res.json({ message: "email already exist login" });

    const hashPasswd = await bcrypt.hash(passwd, 10);
    await pool.query(
      "INSERT INTO users(first_name,second_name,email,password,role) VALUES($1,$2,$3,$4,$5)",
      [firstName, secondName, email, hashPasswd, role]
    );

    return res.status(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ serverErr: res.statusCode });
  }
};

export const userForgotPass = async (req, res) => {
  const { email, password, confirm } = req.body;

  if (!email || !password) return res.json({ message: "missing credentials" });
  if (password !== confirm)
    return res.json({ message: "password doesn't match confirm password" });
  try {
    const exists = await pool.query(
      "SELECT email, password FROM users WHERE email=$1",
      [email]
    );
    if (exists.rows.length === 0)
      return res.json({
        message: "email address doesnt exist.\nsign up for a free account",
      });

    const checkPassword = await bcrypt.compare(
      password,
      exists.rows[0].password
    );

    if (checkPassword)
      return res.json({ message: "password is similar to the old password" });
    const hashPasswd = await bcrypt.hash(password, 10);
    await pool.query("UPDATE users SET password=$1 WHERE email=$2", [
      hashPasswd,
      email,
    ]);
    return res.json({ message: "password changed succefully" });
  } catch (error) {
    return res.status(500).json({ message: "InternalServerError" });
  }
};
