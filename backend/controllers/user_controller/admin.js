const pool = require('../../model/usersDB')

exports.getAdminDash = (req, res) => {
    return res.json({results: 'admin dashboard'})
}
