import { Router } from "express";
import {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employee";
import { validate } from "../middlewares/validate";
import {
  createEmployeeValidation,
  employeeIdValidation,
  updateEmployeeValidation,
} from "../validations/employee";

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);

employeeRouter.get("/:id", validate(employeeIdValidation), getEmployeeById);

employeeRouter.post("/", validate(createEmployeeValidation), createEmployee);

employeeRouter.put("/:id", validate(updateEmployeeValidation), updateEmployee);

employeeRouter.delete("/:id", validate(employeeIdValidation), deleteEmployee);

export default employeeRouter;
  