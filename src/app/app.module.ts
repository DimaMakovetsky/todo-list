import { SpaceRemoverDirective } from './directives/spaceRemover.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoTaskComponent } from './todo-task/todo-task.component'
import {MatCheckboxModule} from"@angular/material/checkbox"
import {MatSnackBarModule}from "@angular/material/snack-bar";
import { TaskFormDialogComponent } from './task-form-dialog/task-form-dialog.component'
import {MatDialogModule} from '@angular/material/dialog'
import {MatOptionModule } from '@angular/material/core';
import {MatSelectModule } from '@angular/material/select';
import { TodoProgressComponent } from './todo-progress/todo-progress.component';
import { TooltipDirective } from './directives/tooltip.directive';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTaskComponent,
    TaskFormDialogComponent,
    TodoProgressComponent,
    TooltipDirective,
    SpaceRemoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
