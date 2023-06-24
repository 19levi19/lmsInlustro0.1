import express from "express";
import {
  getallquizz, updatequizz, createquizz
} from "../controllers/quizz.controllers.js";

const router = express.Router();


router.route("/create").post(createquizz);
router.route("/").get(getallquizz);
router.route("/:id").patch(updatequizz);



export default router;
