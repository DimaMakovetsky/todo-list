import { TaskService } from '../../../services/task.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Task } from '../../types/task.type';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit
{
  public taskList: Task[]=[
  {
    id: 0,
    title: 'Task',
    description: 'Descr',
    assignee: 'John',
    isUrgent: false,
    completed: false
  }
    
  ];
  public newTask: string;
  public editing:boolean=false;
  public date:Date;
  private toEdit=0;
  private lastId:number=0;
  private users:string[]=["John", "Alex","Bob"];

  constructor (
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private TaskService:TaskService
    ) {
    
  }

  @HostListener('window:keyup.enter')
  showNotification():void
  {
    this._snackBar.open("Created","",{duration: 3*1000,});
  }

  ngOnInit(): void {
    this.taskList=this.TaskService.getTasks();
  }

  addTask(): void
  {
  //   if(this.newTask)
  //   {
  //     this.taskList.push({title: this.newTask,id:++this.lastId, completed:false});
  //     this.newTask="";
  //  }
    const dialogRef=this.dialog.open(TaskFormDialogComponent,
      {
        width:"600px",
        data:{users:this.users }
      })
    dialogRef.afterClosed().subscribe(result=>
      {
        if(result)
        {

          // console.log(result);
          // if(result.isUrgent===null)
          // {
          //   result.isUrgent=false;
          // }
          // const obj:Task={id:++this.lastId, title:result.title,isUrgent:result.isUrgent,asignee:result.asignee}
          const obj:Task={id:++this.lastId, ...result}
          this.taskList.push(obj);
        }
      });
    }
  removeTask(taskId:number):void
  {
    const taskIndex=this.taskList.findIndex(task=>task.id===taskId);
    this.taskList.splice(taskIndex,1);
  }

  editTask(taskId:number):void
  {
    const task=this.taskList.find(task=>task.id===taskId);
    const dialogRef=this.dialog.open(TaskFormDialogComponent,
      {
        width:"600px",
        data:{task ,users:this.users }
      })
    dialogRef.afterClosed().subscribe(result=>
      {
        if(result)
        {
          const taskIndex=this.taskList.findIndex(task=>task.id===taskId);
          this.taskList.splice(taskIndex,1);
          this.taskList.push({...task,...result});
        }
      });
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
