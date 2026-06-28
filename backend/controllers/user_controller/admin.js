import pool from "../../config/dbConnect.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, firstname, secondname, email FROM users LIMIT 7");
    return res.json({ users: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const singleUser = async (req, res) => {
  const {id} = req.params
  const userId = parseInt(id)
  console.log(userId)

  if (!userId) return res.status(403).json({message: 'Missing user id'})

  try {
    const user = await pool.query(`SELECT u.firstname, u.secondname, u.email, uc.course FROM users u
      LEFT JOIN user_courses uc ON u.id = uc.user_id
      WHERE u.id=$1`, [userId])
    
      if (user.rows.length === 0 ) return res.status(404).json({message: "User not found"})
  
      return res.json({user: user.rows})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: "server error"})
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "id not provided" });

  try {
    const checkExist = await pool.query("SELECT id, firstname FROM users WHERE id=$1", [id]);

    if (checkExist.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await pool.query("DELETE FROM users WHERE id=$1", [id]);

    return res.json({ message: `Removed ${checkExist.rows[0].name}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
