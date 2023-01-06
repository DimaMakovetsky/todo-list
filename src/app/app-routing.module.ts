import { Guard } from './services/guard/guard.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component: LoginComponent
  },
  { 
    path:"todo",
     loadChildren:()=>import("./todo/todo.module").then(m=>m.TodoModule),
    // component:TodoListComponent,
    canActivate:[Guard]
  },
  {
    path:"**",
    component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
