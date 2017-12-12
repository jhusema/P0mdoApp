import { SubTask } from "./SubTask";
import { TaskDefinition } from "./TaskDefinition";

export class Task extends TaskDefinition{
    aproxPomodoros: number;
    tags: string[];
    categories: string[];
    subtaks: SubTask;
    
    constructor() {
        super();
    }
}