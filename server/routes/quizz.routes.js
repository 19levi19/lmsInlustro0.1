import express from "express";
import {
  getallquizz, 
  updatequizz, 
  createquizz, 
  getquizzbyId,
  deletequizzId
} from "../controllers/quizz.controllers.js";

const router = express.Router();

router.route("/:quizzId").get(getquizzbyId);
router.route("/create").post(createquizz);
router.route("/").get(getallquizz);
router.route("/:quizzId").delete(deletequizzId);
router.route("/:quizzId").patch(updatequizz);


export default router;
