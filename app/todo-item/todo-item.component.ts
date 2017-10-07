import { Component } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo-item/todo-item.component.html',
    styleUrls: ['./app/todo-item/todo-item.component.css']
})
export class TodoItemComponent {
    todo: Todo = new Todo('asdf');
}