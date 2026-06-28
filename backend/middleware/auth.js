const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

/**
 * Handles verify token
 */
function verifyToken(req, res, next) {
  try {
    // Get token from HttpOnly cookie
    //const token = req.cookies.authToken;
    const rawToken = req.headers.authorization;
    if (!rawToken) return res.json({ invalid: "no access token" });
    //if (!rawToken.startsWidth('Bearer')) return res.status(403).json({invalid: 'no access token'})
    const token = rawToken.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ tokenErr: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }

      req.user = user; // attach decoded payload (e.g. userId, role)
      next();
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ serverError: 500 });
  }
}

/**
 * Handles authorized role
 */
const authorizedRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.json({ accessDenied: "unauthorized access", status: 403 });
    }
    next();
  };
};

module.exports = { verifyToken, authorizedRole };
