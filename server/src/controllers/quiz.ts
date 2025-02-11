import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { QuizModel } from "../models/quiz";


export const getAllQuizzes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const quizzes = await QuizModel.find();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

export const getQuizById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const quiz = await QuizModel.findById(req.params.id);
    if (!quiz) throw createHttpError(404, "Quiz not found!");
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
};

export const createQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const quiz = new QuizModel(req.body);
    const createdQuiz = await quiz.save();
    res.status(201).json(createdQuiz);
  } catch (error) {
    next(error);
  }
};

export const updateQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedQuiz = await QuizModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuiz) throw createHttpError(404, "Quiz not found!");
    res.json(updatedQuiz);
  } catch (error) {
    next(error);
  }
};

export const deleteQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await QuizModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    next(error);
  }
};
