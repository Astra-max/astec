const pool = require("../../model/usersDB");

exports.registerCourse = async (req, res) => {
  const { course, userId } = req.body;
  const { id } = req.params
  const initialCourseStatus = "start";
  const initialCourseProgress = "start learning";
  console.log(course);

  if (!course || !userId)
    return res.json({ invalid: "missing id or course name" });

  try {
    const courseExist = await pool.query(
      `SELECT user_id, course FROM user_courses WHERE course=$1`,
      [course]
    );
    if (courseExist.rows[0] > 0) return res.json({ invalid: "course exist" });

    //const feedBack = await pool.query(
      //`INSERT INTO user_courses(user_id,course,registered,status) VALUES($1,$2,$3,$4)`,
      //[userId, course, initialCourseStatus, initialCourseProgress]
    //);

    res.json({ id: id, progress: initialCourseProgress });
  } catch (error) {
    console.log(error);
    return res.json({ invalid: "internal server error" });
  }
};

exports.courseUpdate = async (req, res) => {};

exports.deleteCourse = async (req, res) => {};
