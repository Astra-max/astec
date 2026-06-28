const pool = require("../../model/usersDB");

exports.getAllActivities = async (req, res) => {
  try {
    const data = await pool.query(
      "SELECT id, name, activity_type, time ,venue, option FROM activities WHERE time > '2025-06-30' ORDER BY time ASC"
    );
    return res.json(data.rows);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ serverErr: error });
  }
};

exports.registerActivity = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const id = req.params.id;
  return res.json({ id });
};
