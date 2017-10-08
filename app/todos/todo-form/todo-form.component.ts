import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: './app/todos/todo-form/todo-form.component.html',
    styleUrls: ['./app/todos/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    title: string = '';
    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit() {
        this.create.emit(this.title);
    }
}