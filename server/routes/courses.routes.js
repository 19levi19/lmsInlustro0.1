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

const router = express.Router();

router.route("/:courseId").get(getcoursebyid);
router.route("/create").post(createcourse);
router.route("/").get(getallcourse);
router.route("/:courseId").patch(updatecourse);
router.route('/:courseId').delete(deleteCourse);
// // router.get('/courses/:id/students', studentsEnrolled);
// // router.get('/courses/:id/instructor', instructor);

export default router;
