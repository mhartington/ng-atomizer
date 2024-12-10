import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodosService } from '../../providers/todos.service';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodosService);

  readonly params = toSignal(this.route.queryParams);

  public todos = computed(() => {
    if (this.params()!['q'] === 'all') {
      return this.todoService.todos();
    }
    return this.todoService
      .todos()
      .filter((e) => e.status === this.params()!['q']);
  });

  toggleTodo(todo: Todo) {
    console.log('test')
    this.todoService.toggleStatus(todo);
  }
}
