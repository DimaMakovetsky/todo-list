import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoTaskDetailsComponent } from "./components/todo-task-details/todo-task-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    data: {
      breadcrumb: 'Tasks'
    },
    children: [
      {
        path: '',
        component: TodoListComponent,
      },
      {
        path: 'new',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Create new task'
        }
      },
      {
        path: ':id',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Edit task'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
