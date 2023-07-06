import express from 'express';
import{
    getAllusers,
    getbyusername,
    createuser,
    userlogin,
    deleteuser,
} from "../controllers/users.controllers.js"

 import authenticateUser from '../authentication/authenticateuser.js';
const router = express.Router();





 
router.route("/").get(getAllusers);
router.route("/:email").get(getbyusername);
router.route("/create").post(createuser);
router.route("/login").post(userlogin);
router.route("/:email").delete(deleteuser);



router.get('/login', authenticateUser, (req, res) => {
    // Access the authenticated user using `req.user`
    const user = req.user;
  
    // Handle the protected route logic
    res.json({ message: 'Access granted to protected route', user });
  });




export default router;

