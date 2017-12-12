import { Task } from "../Task/Task";

export class Space{
    id: number;
    idDefinition: number;
    name: string;
    assignedPomodoros: number;
    tasks: Task;
    isPomodoroTimed: boolean;
}