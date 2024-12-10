import { Injectable, signal } from '@angular/core';
export type Todo = {
  value: string;
  id: string;
  status: Status;
};
export const enum Status {
  inProgress = 'in-progress',
  completed = 'completed',
}
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todo[]>([
    {
      value: 'Atomize Tests',
      id: crypto.randomUUID(),
      status: Status.inProgress,
    },
    {
      value: '???',
      id: crypto.randomUUID(),
      status: Status.inProgress,
    },

    {
      value: 'Profit',
      id: crypto.randomUUID(),
      status: Status.inProgress,
    },
  ]);
  constructor() {}

  addTodo(value: string) {
    this.todos.update((todos) => [
      ...todos,
      { value, id: crypto.randomUUID(), status: Status.inProgress },
    ]);
  }
  toggleStatus(updatedTodo: Todo) {
    if (updatedTodo.status === Status.inProgress) {
      updatedTodo.status = Status.completed;
    } else {
      updatedTodo.status = Status.inProgress;
    }
    this.todos.update((todos) =>
      todos.map((e) => (e.id === updatedTodo.id ? updatedTodo : e)),
    );
  }
}
