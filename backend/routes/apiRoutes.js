const express = require("express");
const {
  getAllActivities,
  registerActivity,
} = require("../controllers/user_controller/activities");
const { getSingleUser } = require("../controllers/user_controller/user");
const {
  userLogin,
  userSignUp,
  refreshToken,
  userForgotPass,
} = require("../controllers/user_controller/auth");
const { verifyToken, authorizedRole } = require("../middleware/auth");
const {
  registerCourse,
  getCourses,
} = require("../controllers/user_controller/courses");
const { deleteUser, getUsers, singleUser } = require("../controllers/user_controller/admin");

const router = express.Router();


// user's routes 
router.post("/api/auth/signup", userSignUp);
router.post("/auth/login", userLogin);
router.post("/api/auth/forgot-password", userForgotPass);
router.post("/api/refresh", refreshToken);
router.get("/api/activity", verifyToken, getAllActivities);
router.get("/api/courses", verifyToken, getCourses);
router.post("/api/activity/register/:id", verifyToken, registerActivity);
router.post("/api/course/register/:id", verifyToken, registerCourse);
router.all("/api/users/:id", verifyToken, getSingleUser);


// admin routes
router.get("/api/admin/dashboard", verifyToken, authorizedRole("admin"), getUsers);
router.get("/api/admin/dashboard/users/:id", verifyToken, authorizedRole("admin"), singleUser);
router.delete("/api/admin/dashboard/user/:id", verifyToken, authorizedRole("admin"), deleteUser);
//router.delete("/api/admin/dashboard/user/:id", verifyToken, authorizedRole("admin"), deleteUser);



module.exports = router;