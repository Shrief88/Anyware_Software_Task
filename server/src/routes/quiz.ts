import { Router } from "express";
import {
  getAllQuizzes,
  createQuiz,
  deleteQuiz,
  getQuizById,
  updateQuiz,
} from "../controllers/quiz";
import {
  createQuizValidation,
  updateQuizValidation,
  quizIdValidation,
} from "../validations/quiz";
import { validate } from "../middlewares/validate";

const quizRouter = Router();

quizRouter.get("/", getAllQuizzes);

quizRouter.get("/:id", validate(quizIdValidation), getQuizById);

quizRouter.post("/", validate(createQuizValidation), createQuiz);

quizRouter.put("/:id", validate(updateQuizValidation), updateQuiz);

quizRouter.delete("/:id", validate(quizIdValidation), deleteQuiz);

export default quizRouter;
