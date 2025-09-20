const express = require('express')
const { getAllActivities, registerActivity } = require('../controllers/user_controller/activities')
const { getSingleUser } = require('../controllers/user_controller/user')
const { userLogin, userSignUp } = require('../controllers/user_controller/auth')
const { verifyToken } = require('../middleware/auth')
const { registerCourse } = require('../controllers/user_controller/courses')

const router = express.Router()

router.post('/api/auth/signup', userSignUp)
router.post('/api/auth/login', userLogin)
router.get('/api/activity',verifyToken, getAllActivities)
router.post('/api/activity/register/:id', verifyToken,registerActivity)
router.post('/api/course/register/:id', verifyToken, registerCourse)
router.all('/api/users/:id', verifyToken, getSingleUser)

module.exports = router