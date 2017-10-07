import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: './app/todo-form/todo-form.component.html',
    styleUrls: ['./app/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    title: string = '';
    @Output() add = new EventEmitter();

    submitTodoForm() {
        this.add.emit(this.title);
    }
}