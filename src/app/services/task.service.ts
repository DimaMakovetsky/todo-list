import { Injectable } from '@angular/core';
import { Task } from '../todo/types/task.type';
import { tasks } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService{

  constructor() { }

  getTasks():Task[]
  {
    return tasks;
  }
}
