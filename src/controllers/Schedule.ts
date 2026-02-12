import { Elysia, t } from "elysia";
import { db } from "../controllers/db";

export const ScheduleController = new Elysia()

  .get("/api/schedule/all", () => {
    return { data: db.data.schedule };
  }) // все данные выдает

  .get(
    "/api/schedule",
    ({ query }) => {
      const { startDate, endDate, employeeIds } = query; // прописка в юрл
      const allSchedule = db.data.schedule;
      const requestedEmployeeIds = employeeIds.split(",");

      const filteredSchedules = allSchedule.filter((schedule) => {
        if (
          !schedule.employeeIds?.length ||
          !schedule.startDate ||
          !schedule.endDate
        ) {
          return false; // Проверяем что есть данные для фильтрации
        }
        return (
          schedule.employeeIds.some((id) =>
            requestedEmployeeIds.includes(id),
          ) &&
          schedule.startDate >= startDate &&
          schedule.endDate <= endDate // Диапозон дат
        );
      });
      return {
        data: filteredSchedules, // Возвращаем в формате { data: EmployeeSchedule[] } со статусом 200
      };
    },
    {
      query: t.Object({
        employeeIds: t.String(),
        startDate: t.String({ format: "date" }),
        endDate: t.String({ format: "date" }),
      }),
    },
  )

  // POST - для записи
  .post(
    "/api/schedule",
    async ({ body }) => {
      const newSchedule = {
        id: Date.now(), // генерируем уникальный ID для примера
        ...body,
      };

      // Добавляем в базу
      db.data.schedule.push(newSchedule);
      await db.write(); // сохраняем в файл

      return newSchedule;
    },
    {
      body: t.Object({
        employeeIds: t.Array(t.String()),
        startDate: t.String({ format: "date" }),
        endDate: t.String({ format: "date" }),
      }),
    },
  );
