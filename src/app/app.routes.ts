import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo:'/todos?q=in-progress', pathMatch:"full"},
  {path: 'todos', loadComponent: () => import('./routes/todos/todos.component').then(m => m.TodosComponent)},

];
