import express from 'express';
import{
    getAllusers,
    getbyusername,
    createuser,
    userlogin,
    deleteuser,
    // getuserdetails,
} from "../controllers/users.controllers.js"

// import authenticateUser from '../middleware/authorizeUser.js';
const router = express.Router();

router.route("/").get(getAllusers);
router.route("/:email").get(getbyusername);
router.route("/create").post(createuser);
router.route("/login").post(userlogin);
router.route("/:email").delete(deleteuser); 
// router.route("/:id/enrollment-details").get(getuserdetails)




export default router;

