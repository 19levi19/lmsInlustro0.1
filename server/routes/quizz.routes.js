import express from "express";
import {
  getallquizzes
} from "../controllers/quizz.controllers.js";

const router = express.Router();


router.route("/").get(getallquizzes);



export default router;
