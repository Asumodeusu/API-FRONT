import { JSONFilePreset } from 'lowdb/node'
import type { Database } from '../data';

const defaultData: Database = {
  employees: [],
  activityTypes: [],
  schedule: []
};

export const db = await JSONFilePreset('./src/db.json', defaultData);