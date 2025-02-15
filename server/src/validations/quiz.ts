import { body, param } from "express-validator";

export const quizIdValidation = [
  param("id").isMongoId().withMessage("Invalid quiz ID"),
];

export const createQuizValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Quiz title is required")
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Title cannot be less than 3 characters"),
  body("course")
    .trim()
    .notEmpty()
    .withMessage("Course name is required")
    .isLength({ max: 100 })
    .withMessage("Course cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Course cannot be less than 3 characters"),
  body("topic")
    .trim()
    .notEmpty()
    .withMessage("Topic is required")
    .isLength({ max: 100 })
    .withMessage("Topic cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Topic cannot be less than 3 characters"),
  body("due_to_day")
    .trim()
    .notEmpty()
    .withMessage("Due date is required")
    .matches(/^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/)
    .withMessage("Invalid date format. Use DD-MM-YYYY"),
  body("due_to_hour")
    .trim()
    .notEmpty()
    .withMessage("Due time is required")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Invalid time format. Use HH:MM"),
];

export const updateQuizValidation = [
  param("id").isMongoId().withMessage("Invalid quiz ID"),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Quiz title cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Title cannot be less than 3 characters"),
  body("course")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Course name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Course cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Course cannot be less than 3 characters"),
  body("topic")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Topic cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Topic cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("Topic cannot be less than 3 characters"),
  body("due_to_day")
    .optional()
    .trim()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/)
    .withMessage("Invalid date format. Use DD-MM-YYYY"),
  body("due_to_hour")
    .optional()
    .trim()
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Invalid time format. Use HH:MM"),
];
