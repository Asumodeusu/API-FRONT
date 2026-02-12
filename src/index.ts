import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { EmployeesController } from "./controllers/Employees";
import { DictionariesController } from "./controllers/Dictionaries";
import { ScheduleController } from "./controllers/Schedule";

const app = new Elysia()
  .use(
    cors({
      origin: true,
    }),
  )
  .use(EmployeesController)
  .use(DictionariesController)
  .use(ScheduleController)
  .get("/", () => "Сервер запущен! 🚀")
  .listen(3000);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
