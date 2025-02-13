import { Router } from "express";
import {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employee";

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);

employeeRouter.get("/:id", getEmployeeById);

employeeRouter.post("/", createEmployee);

employeeRouter.put("/:id", updateEmployee);

employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;
