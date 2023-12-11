import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
      this.todos = this.localItem ? JSON.parse(this.localItem) : [];
    } else {
      this.localItem = null;
      this.todos = [];
    }
  }

  ngOnInit(): void {
    // Initialization code if needed
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    if (typeof localStorage !== 'undefined') {
      if (!this.localItem) {
        this.todos = [];
      }
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      console.warn('localStorage is not available in this environment.');
    }
  }
}
