import express from "express";
import {
  createcourse,
  getallcourse,
  updatecourse,
  getcoursebyid,
  deleteCourse,
  // //   studentsEnrolled,
  // //   instructor,
} from "../controllers/course.controllers.js";
import authorizeUser from "../middleware/authorizeUser.js";



const router = express.Router();
router.route("/:courseId").all(authorizeUser).get(getcoursebyid);
router.route("/create").post(createcourse);
router.route("/").get(getallcourse);
router.route("/:courseId").patch(updatecourse);
router.route("/:courseId").delete(deleteCourse);



// authentication
// router.route('/login').post(function(req, res){
//   // check username and password in database - req.body.username, req.body.password cryto

//   // if success, randomly generate token - uuid4
//   // store token in a session table - user ID and the token id
//   // return the token to the user as response

// })
// autherization
// authMiddleware = function(req, res, next){

//   // check req.header.authorization
//   // check in session table if exists and identify user
//   // attach the user data to req.user_info;

//   next();
// }
// // router.get('/courses/:id/students', studentsEnrolled);
// // router.get('/courses/:id/instructor', instructor);

export default router;
