import express from "express";
import {
  createcourse,
  getallcourse,
  updatecourse,
  // //   getCourseById,
  // //   deleteCourse,
  // //   studentsEnrolled,
  // //   instructor,
} from "../controllers/course.controllers.js";

const router = express.Router();
// /courses/
router.route("/create").post(createcourse);
router.route("/").get(getallcourse);
router.route("/:id").put(updatecourse);
// // router.get('/courses/:id', getCourseById);
// // router.delete('/courses/:id', deleteCourse);
// // router.get('/courses/:id/students', studentsEnrolled);
// // router.get('/courses/:id/instructor', instructor);

export default router;
