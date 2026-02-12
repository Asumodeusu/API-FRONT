import { JSONFilePreset } from "lowdb/node";
import type { Database } from "../types/data";

const defaultData: Database = {
  employees: [],
  activityTypes: [],
  schedule: [],
};

export const db = await JSONFilePreset("./public/db.json", defaultData);
