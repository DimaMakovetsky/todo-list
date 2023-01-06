import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../../../services/task.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-todo-task-details',
  templateUrl: './todo-task-details.component.html',
  styleUrls: ['./todo-task-details.component.scss']
})
export class TodoTaskDetailsComponent {
  public taskForm = this.fb.group({
    title: new FormControl<string>(
      null,
      [Validators.required, this.titleValidator]
    ),
    description: new FormControl<string>(null, [Validators.maxLength(5)]),
    assignee: new FormControl<string>(null, [Validators.required]),
    isUrgent: new FormControl<boolean>(null),
  });
  public users: string[] = ["John", "Alex", 'Bob'];
  public title: string;

  private taskId: number;
  private task: Task;
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.taskId = params['id'];
      if (this.taskId) {
        this.task = await this.taskService.getTask(+this.taskId);
        this.setFormValue();
      }
      this.title = this.taskId ? 'Edit task' : 'Create task';
    });
    this.taskService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  goBack(): void {
    this.router.navigate(['/todo']);
  }

  save(): void {
    if (this.taskId) {
      this.taskService.editTask();
    } else {
      this.taskService.createTask();
    }
    this.goBack();
  }

  private setFormValue(): void {
    this.taskForm.setValue({
      title: this.task.title,
      description: this.task.description || null,
      isUrgent: this.task.isUrgent,
      assignee: this.task.assignee
    });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
  titleValidator(control:FormControl)
  {
    const exp:RegExp=/^[A-Z]\w+/gm;
    return (control.value!==null&&!exp.test(control.value))?{capitaliseError:true}:null;
  }
}
