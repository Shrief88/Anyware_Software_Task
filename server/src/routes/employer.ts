import { Router } from "express";
import {
  getAllEmployers,
  createEmployer,
  deleteEmployer,
  getEmployerById,
  updateEmployer,
} from "../controllers/employer";

const employerRouter = Router();

employerRouter.get("/", getAllEmployers);

employerRouter.get("/:id", getEmployerById);

employerRouter.post("/", createEmployer);

employerRouter.put("/:id", updateEmployer);

employerRouter.delete("/:id", deleteEmployer);

export default employerRouter;
