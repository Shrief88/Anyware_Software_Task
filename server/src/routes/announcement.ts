import { Router } from "express";
import {
  getAllAnnouncements,
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncementById,
  updateAnnouncement,
} from "../controllers/announcement";
import { validate } from "../middlewares/validate";
import {
  createAnnouncementValidation,
  updateAnnouncementValidation,
  announcementIdValidation,
} from "../validations/announcement";

const announcementRouter = Router();

announcementRouter.get("/", getAllAnnouncements);

announcementRouter.get(
  "/:id",
  validate(announcementIdValidation),
  getAnnouncementById
);

announcementRouter.post(
  "/",
  validate(createAnnouncementValidation),
  createAnnouncement
);

announcementRouter.put(
  "/:id",
  validate(updateAnnouncementValidation),
  updateAnnouncement
);

announcementRouter.delete(
  "/:id",
  validate(announcementIdValidation),
  deleteAnnouncement
);

export default announcementRouter;
