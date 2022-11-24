import { Component } from '@angular/core';
import { Task } from '../types/task.type';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent 
{
  public taskList: Task[]=[];
  public newTask: string;
  public editing:boolean=false;
  private toEdit=0;
  private lastId:number=0;
  addTask(): void
  {
    if(this.newTask)
    {
      this.taskList.push({title: this.newTask,id:++this.lastId, completed:false});
      this.newTask="";
      console.log(this.taskList);
    }

  }
  removeTask(taskId:number):void
  {
    const taskIndex=this.taskList.findIndex(task=>task.id===taskId);
    this.taskList.splice(taskIndex,1);
  }

  editTask(taskId:number):void
  {
    const taskIndex=this.taskList.findIndex(task=>task.id===taskId);
    this.newTask=this.taskList[taskIndex].title;
    this.editing=true;
    this.toEdit=taskIndex;
    // console.log(this.newTask);
  }
  saveTask():void
  {
    this.taskList[this.toEdit].title=this.newTask;
    this.newTask="";
    this.toEdit=null;
    this.cancel();
  }
  cancel():void
  {
    this.editing=false;
    this.newTask="";
    this.toEdit=null;
  }
  
}
