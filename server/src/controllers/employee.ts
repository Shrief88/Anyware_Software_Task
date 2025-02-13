import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { EmployeeModel } from "../models/employee";

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) throw createHttpError(404, "Employee not found");
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = new EmployeeModel(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!employee) throw createHttpError(404, "Employee not found");
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await EmployeeModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
};
