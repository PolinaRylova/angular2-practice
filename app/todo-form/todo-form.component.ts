import { Component } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: './app/todo-form/todo-form.component.html',
    styleUrls: ['./app/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    newTodoTitle: string = '';

    create() {}
}