import { Component } from '@angular/core';

import { TodoService } from '../shared/todo.service';

@Component({
    selector: 'todo-form',
    templateUrl: './app/todo-form/todo-form.component.html',
    styleUrls: ['./app/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: TodoService) {}

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}