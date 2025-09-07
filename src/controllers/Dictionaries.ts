import { Elysia } from "elysia";
import { db } from '../controllers/db'

export const DictionariesController = new Elysia()
    .get('/api/dictionaries/activity-types', () => db.data.activityTypes)