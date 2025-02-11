import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { EmployerModel } from "../models/employer";

export const getAllEmployers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employers = await EmployerModel.find();
    res.status(200).json(employers);
  } catch (error) {
    next(error);
  }
};

export const getEmployerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employer = await EmployerModel.findById(req.params.id);
    if (!employer) throw createHttpError(404, "Employer not found");
    res.status(200).json(employer);
  } catch (error) {
    next(error);
  }
};

export const createEmployer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employer = new EmployerModel(req.body);
    await employer.save();
    res.status(201).json(employer);
  } catch (error) {
    next(error);
  }
};

export const updateEmployer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employer = await EmployerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!employer) throw createHttpError(404, "Employer not found");
    res.status(200).json(employer);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await EmployerModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Employer deleted successfully" });
  } catch (error) {
    next(error);
  }
};
