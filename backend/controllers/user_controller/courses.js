const pool = require("../../model/usersDB");

exports.registerCourse = async (req, res) => {
  const { course, courseId, userId } = req.body;
  const { id } = req.params;
  const initialCourseStatus = "start learning";
  console.log(req.body);

  if (!course || !userId)
    return res.json({ invalid: "missing id or course name" });

  try {
    const courseExist = await pool.query(
      `SELECT course_id, user_id FROM user_courses WHERE course_id=$1 AND user_id=$2`,
      [courseId, userId]
    );

    if (courseExist.rows.length > 0)
      return res.json({ invalid: "course already exist" });

    const feedBack = await pool.query(
      `INSERT INTO user_courses(user_id,course_id,course,status) VALUES($1,$2,$3,$4)`,
      [userId, courseId, course, initialCourseStatus]
    );

    res.json({ id: id, progress: initialCourseProgress });
  } catch (error) {
    console.log(error.detail);
    return res.json({ invalid: "internal server error" });
  }
};

exports.getCourses = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Get user's registered courses
    const registeredCourses = await pool.query(
      `
      SELECT c.id, c.course, c.subscriptible, c.image, uc.status
      FROM courses c
      INNER JOIN user_courses uc ON uc.course_id = c.id
      WHERE uc.user_id = $1
      `,
      [userId]
    );

    // If user has less than 6 registered courses, fill up with others
    let courses = registeredCourses.rows;

    if (courses.length < 6) {
      const needed = 6 - courses.length;

      // Fetch unregistered courses
      const unregisteredCourses = await pool.query(
        `
        SELECT c.id, c.course, c.subscriptible, c.image, NULL as status
        FROM courses c
        WHERE c.id NOT IN (
          SELECT course_id FROM user_courses WHERE user_id = $1
        )
        LIMIT $2
        `,
        [userId, needed]
      );

      courses = [...courses, ...unregisteredCourses.rows];
    }

    // Return combined list
    console.log(courses)
    return res.json({ cardElements: courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return res.status(500).json({ error: "Failed to fetch courses" });
  }
};


exports.courseUpdate = async (req, res) => {};

exports.deleteCourse = async (req, res) => {};
