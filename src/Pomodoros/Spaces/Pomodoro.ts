import { SpaceDefinition } from "./SpaceDefinition";
import { Task } from "../Task/Task";
import { Category } from "../Task/Category";
import { Space } from "./Space";

export class Pomodoro extends Space{
    date: Date;
    task: Task;
    addedTasks: Task[];
    finishedState: string;
    
}