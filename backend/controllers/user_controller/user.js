const pool = require("../../model/usersDB")

exports.addUser = async (req, res) => {
    const {firstName,secondName, emailAddr, passWord} = req.body
    const ifExist = await pool.query(`SELECT email FROM users WHERE email=$1`,[emailAddr])

    if (ifExist.rows > 0) {
        return res.json({userExist: "user exists"})
    }
    try {
        const result = await pool.query(
          'INSERT INTO users (firstname, secondname, email, password) VALUES ($1,$2,$3,$4) RETURNING *',
          [firstName, secondName,emailAddress, passWord]
        );
        res.status(201).json({ user: result.rows[0] });
    } catch (error) {
        return res.status(500).json({serverError: 500})
    }
}

exports.removeUser = async (req, res) => {
    const userId = parseInt(req.param.id)
    try {
        const removedUser = await pool.query(`DELETE FROM users WHERE id=$1`, [userId])
        res.json({message: removedUser})
    } catch (error) {
        return res.status(500).json({serverError: 500})
    }
}

exports.getSingleUser = async (req, res) => {
    const userId = +req.params.id
    try {
        const singleUser = await pool.query('SELECT firstname,secondname,email FROM users WHERE id=$1',[userId])
        if (singleUser.rows.length !== 0) return res.json({user: singleUser.rows[0]})
        return res.status(404).json({userNotFound: res.statusCode})
    } catch (error) {
        return res.status(500).json({serverError: 500})
    }
}