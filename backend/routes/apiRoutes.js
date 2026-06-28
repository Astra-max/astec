import express from "express";
import {
  getAllActivities,
  registerActivity,
} from "../controllers/user_controller/activities.js";
import { getSingleUser } from"../controllers/user_controller/user.js";
import {
  userLogin,
  userSignUp,
  refreshToken,
  userForgotPass,
} from "../controllers/user_controller/auth.js";
import { verifyToken, authorizedRole } from "../middleware/auth.js";
import {
  registerCourse,
  getCourses,
} from"../controllers/user_controller/courses.js";
import { deleteUser, getUsers, singleUser } from "../controllers/user_controller/admin.js";

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


export default router;