import { Component, input } from '@angular/core';
import { Todo } from '../../providers/todos.service';

@Component({
  selector: 'todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
}
