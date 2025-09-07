export interface Employee {
  id: number;
  name: string;
  position: string;
  avatarUrl: string;
}

export interface ActivityTypes {
  id: number;
  name: string;
  color: string;
}

export interface Schedule {
  id: number;
  employeeIds: string[];
  startDate: string;
  endDate: string;
}

export interface Database {
  employees: Employee[];
  activityTypes: ActivityTypes[];
  schedule: Schedule[];
}