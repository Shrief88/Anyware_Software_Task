import { body, param } from "express-validator";
import { Position, Gender } from "../models/employee";

export const employeeIdValidation = [
  param("id").isMongoId().withMessage("Invalid employee ID"),
];

export const createEmployeeValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ max: 50 })
    .withMessage("First name cannot exceed 50 characters")
    .isLength({ min: 3 })
    .withMessage("First name cannot be less than 3 characters"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ max: 50 })
    .withMessage("Last name cannot exceed 50 characters")
    .isLength({ min: 3 })
    .withMessage("Last name cannot be less than 3 characters"),
  body("position")
    .trim()
    .notEmpty()
    .withMessage("Position is required")
    .isIn(Object.values(Position))
    .withMessage("Invalid position"),
  body("image").optional(),
  body("gender")
    .trim()
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(Object.values(Gender)),
];

export const updateEmployeeValidation = [
  ...employeeIdValidation,
  body("firstName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("First name cannot be empty")
    .isLength({ max: 50 })
    .withMessage("First name cannot exceed 50 characters")
    .isLength({ min: 3 })
    .withMessage("First name cannot be less than 3 characters"),
  body("lastName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Last name cannot be empty")
    .isLength({ max: 50 })
    .withMessage("Last name cannot exceed 50 characters")
    .isLength({ min: 3 })
    .withMessage("Last name cannot be less than 3 characters"),
  body("position")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Position cannot be empty")
    .isIn(Object.values(Position))
    .withMessage("Invalid position"),
  body("image").optional(),
  body("gender")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Gender cannot be empty")
    .isIn(Object.values(Gender)),
];
