import  express from 'express';
import {
    createEnrollment,
    getAllEnrollments,
    getenrollmentbyId,
    updateEnrollment,
    deleteEnrollment,
  } from  "../controllers/enroll.controller.js";

const router = express.Router();

router.route('/create').post(createEnrollment);
router.route('/').get(getAllEnrollments);
router.route("/:enrollmentId").get(getenrollmentbyId);
router.route("/:enrollmentId").delete(deleteEnrollment);
router.route("/:enrollmentId").patch(updateEnrollment);

export default router;