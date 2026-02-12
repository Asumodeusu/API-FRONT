import { Elysia } from "elysia";
import { db } from "../controllers/db";

export const EmployeesController = new Elysia().get(
  "/api/employees",
  () => db.data.employees,
);
