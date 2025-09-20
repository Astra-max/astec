const pool = require("../../model/usersDB");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const bcrypt = require("bcrypt");

env.config();

async function bcryptCompare(hashedPasswd, passwd) {
  try {
    const isEqual = await bcrypt.compare(hashedPasswd, passwd);
    return isEqual;
  } catch (error) {
    console.log(error);
  }
}

exports.userLogin = async (req, res) => {
  try {
    console.log(req.body)
    const { email, passwd } = req.body;
    if (!email || !passwd)
      return res.json({ invalid: "missing email or password" });
    const userExists = await pool.query(
      "SELECT id,firstname,secondname,email,role,password FROM users WHERE email=$1",
      [email]
    );
    if (userExists.rows.length === 0)
      return res.json({ invalid: "email doesn't exist, sign up for account" });
    if (userExists.rows[0].email === email) {

      const hashedPasswd = await bcrypt.compare(passwd,userExists.rows[0].password
      );

      if (!hashedPasswd) {
        console.log('Incorrect passwd')
        return res.json({ invalid: "invalid password, try again." });
          //.status(400) 
      }
      const token = jwt.sign(
        { userId: userExists.rows[0].id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({
        userName: `${userExists.rows[0].firstname} ${userExists.rows[0].secondname}`,
        email: userExists.rows[0].email,
        role: userExists.rows[0].role,
        userId: userExists.rows[0].id,
        token: token
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ serverErr: 500 });
  }
};

exports.userSignUp = async (req, res) => {
  const { firstName, secondName, email, passwd, role } = req.body;

  if (!firstName || !secondName || !email || !passwd || !role) {
    return res.json({ invalidCredsErr: "invalid credentials" });
  }
  try {
    const checkExists = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (checkExists.rows.length > 0)
      return res.json({ userExistsErr: "email already exist login" });

    const hashPasswd = await bcrypt.hash(passwd,10)
    await pool.query(
      "INSERT INTO users(firstName,secondName,email,password,role) VALUES($1,$2,$3,$4,$5)",
      [firstName, secondName, email, hashPasswd, role]
    );

    return res.status(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ serverErr: res.statusCode });
  }
};
