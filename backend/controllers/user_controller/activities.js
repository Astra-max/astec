import pool from "../../config/dbConnect.js";

export const getAllActivities = async (req, res) => {
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

export const registerActivity = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const id = req.params.id;
  return res.json({ id });
};
