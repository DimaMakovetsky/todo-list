import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SpaceRemoverDirective } from "../directives/spaceRemover.directive";
import { TooltipDirective } from "../directives/tooltip.directive";
import { TaskFormDialogComponent } from "./components/task-form-dialog/task-form-dialog.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoProgressComponent } from "./components/todo-progress/todo-progress.component";
import { TodoTaskComponent } from "./components/todo-task/todo-task.component";
import { UrgentPipe } from "./pipes/urgent.pipe";
import { TodoTaskDetailsComponent } from './components/todo-task-details/todo-task-details.component';
import { TodoRoutingModule } from "./todo-routing.module";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule
({
    
  declarations: [
    TodoListComponent,
    TodoTaskComponent,
    TaskFormDialogComponent,
    TodoProgressComponent,
    TooltipDirective,
    SpaceRemoverDirective,
    // UrgentPipe,
    TodoTaskDetailsComponent,
    
  ],
  imports: [
    // AppRoutingModule,
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: []
})
export class TodoModule{}