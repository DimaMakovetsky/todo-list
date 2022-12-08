import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../types/task.type';
@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent implements OnInit {
  public taskForm=this.fb.group(
    {
      title:new FormControl<string>(null,[Validators.required, this.titleValidator]),
      description:new FormControl<string>(null, Validators.maxLength(50)),
      assignee:new FormControl<string>(null, [Validators.required]),
      isUrgent:new FormControl<boolean>(null)
    }
    )
    
    
    constructor(
      public dialogRef: MatDialogRef<TaskFormDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {task:Task,users:string[]},
      private fb:FormBuilder
  ) {}

  ngOnInit(): void 
  {
    this.setFormValue();
  }
  cancel():void
  {
    this.dialogRef.close();
  }
  
  
  save():void
  {
    this.dialogRef.close(this.taskForm.value);
  }

  private setFormValue():void
  {
    if(this.data.task)
    {
      this.taskForm.setValue({
        
        title: this.data.task.title,
        assignee: this.data.task.assignee,
        isUrgent: this.data.task.isUrgent,
        description:this.data.task.description||null
      }
      )
    }
  }
  titleValidator(control:FormControl)
  {
    const exp:RegExp=/^[A-Z]\w+/gm;
    return (control.value!==null&&!exp.test(control.value))?{capitaliseError:true}:null;
    // if(control.value!==null&&!exp.test(control.value))
    // {
    //   return{capitaliseError:true}
    // }
    // else
    // {
    //   return null
    // }
  }
}
