import { Router } from "express";
import {
  getAllAnnouncements,
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncementById,
  updateAnnouncement,
} from "../controllers/announcement";

const announcementRouter = Router();

announcementRouter.get("/", getAllAnnouncements);

announcementRouter.get("/:id", getAnnouncementById);

announcementRouter.post("/", createAnnouncement);

announcementRouter.put("/:id", updateAnnouncement);

announcementRouter.delete("/:id", deleteAnnouncement);

export default announcementRouter;