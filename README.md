# Backend + Frontend-JS для записи пользователей на выбранные даты

![Bun](https://img.shields.io/badge/Bun-000?logo=bun)
![Elysia](https://img.shields.io/badge/Elysia-8A2BE2)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![LowDB](https://img.shields.io/badge/LowDB-FF6B6B)
![Frontend-JS](https://img.shields.io/badge/Frontend-JS-F7DF1E?logo=javascript)

Установка:

```bash
bun install
```

Фронтенд:

```bash
открыть frontend/index.html через Live Server
далее открыть сервер и посмотреть, какие данные передались
```

Чтобы запустить сервер:

```bash
bun run start
```

Для проверки API:

```bash
1 - http://localhost:3000
2 - http://localhost:3000/api/dictionaries/activity-types
3 - http://localhost:3000/api/employees
4 - http://localhost:3000/api/schedule/all
```

## О проекте

- Обновленная версия прошлого бэкенда `mock-api` - `https://github.com/Asumodeusu/mock-api`
  Раньше сервер только отдавал моки. Теперь он умеет принимать и сохранять данные с фронта.

**Что внутри:**

- Сервер на Elysia (Bun)
- Данные в LowDB — читает и пишет в db.json
- CORS открыт для всех — фронт на Live Server (5500) стучится на 3000 порт
- Пустой массив schedule — наполняется

**Добавил:**

1. POST-эндпоинт

- Принимает массив ID сотрудников, дату начала и конца.
- Валидирует через TypeBox. Сохраняет в db.json через db.write().

2. Фронтенд на чистом JS и HTML
3. CORS настроен под Live Server - поэтому origin: true.

**Собрал полный цикл:**
Фронт отправляет → сервер валидирует → сохраняет в JSON → данные не пропадают после перезапуска.

## Скриншоты
![form](./public/img/form.jpg)
![json0](./public/img/json0.jpg)
![api0](./public/img/server0.jpg)
![json1](./public/img/json1.jpg)
![api1](./public/img/server1.jpg)
