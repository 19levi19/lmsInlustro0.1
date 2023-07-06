import express from "express";
import {
  createemployee,
  getallemployee,
  updateemployee,
  getemployeebyId,
  deleteemployee,
  // //   studentsEnrolled,
  // //   instructor,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.route("/:employeeId").get(getemployeebyId);
router.route("/create").post(createemployee);
router.route("/").get(getallemployee);
router.route("/:employeeId").patch(updateemployee);
router.route('/:employeeId').delete(deleteemployee);
// // router.get('/courses/:id/students', studentsEnrolled);
// // router.get('/courses/:id/instructor', instructor);

export default router;
