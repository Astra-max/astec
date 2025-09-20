const jwt = require('jsonwebtoken');
const env = require('dotenv')
env.config()

function verifyToken(req, res, next) {
    let authHeader = req.headers.Authorization || req.headers.authorization || ""
    let parts = authHeader.split(" ")
    if (parts.length !== 2 || parts[0] !== "Bearer") return res.status(403).json({forbidden: res.statusCode})
    if (parts[0] === 'Bearer') {
        const token = parts[1]
        if (!token) {
            return res.status(401).json({tokenErr: 'no token access provided'})
        }
    
        try {
            jwt.verify(token, process.env.JWT_SECRET,
                (err, user) => {
                    if (err) return res.status(403).json({message: 'Invalid token'})
                    req.user = user
                }
            )
            next()
        } catch (err) {
            return res.status(500).json({serverError: 500})
        }
    }
}

const authorizeRole = (...allowedRoles) => {
    return (req,res,next) => {
        if (!allowedRoles.includes(req.user.role)) return res.status(403).
        json({accessDenied: res.statusCodes})
        next()
    }
}

module.exports = {verifyToken,  authorizeRole}