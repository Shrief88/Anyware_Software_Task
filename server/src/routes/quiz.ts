import { Router } from "express";
import {
  getAllQuizzes,
  createQuiz,
  deleteQuiz,
  getQuizById,
  updateQuiz,
} from "../controllers/quiz";

const quizRouter = Router();

quizRouter.get("/", getAllQuizzes);

quizRouter.get("/:id", getQuizById);

quizRouter.post("/", createQuiz);

quizRouter.put("/:id", updateQuiz);

quizRouter.delete("/:id", deleteQuiz);

export default quizRouter;