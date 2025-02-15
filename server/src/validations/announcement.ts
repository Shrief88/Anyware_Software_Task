import { body, param } from "express-validator";

export const announcementIdValidation = [
  param("id").isMongoId().withMessage("Invalid announcement ID"),
];

export const createAnnouncementValidation = [
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Announcement content is required")
    .isLength({ max: 1000 })
    .withMessage("Content cannot exceed 1000 characters")
    .isLength({ min: 3 })
    .withMessage("Content cannot be less than 3 characters"),
  body("about")
    .trim()
    .notEmpty()
    .withMessage("About is required")
    .isLength({ max: 100 })
    .withMessage("About cannot exceed 100 characters")
    .isLength({ min: 3 })
    .withMessage("About cannot be less than 3 characters"),
  body("employee").isMongoId().withMessage("Invalid employee ID"),
];

export const updateAnnouncementValidation = [
  ...announcementIdValidation,
  body("content")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Announcement content cannot be empty")
    .isLength({ max: 1000 })
    .withMessage("Content cannot exceed 1000 characters"),
  body("subject")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Subject cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Subject cannot exceed 100 characters"),
];
