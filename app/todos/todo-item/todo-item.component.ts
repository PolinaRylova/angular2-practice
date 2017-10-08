import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todos/todo-item/todo-item.component.html',
    styleUrls: ['./app/todos/todo-item/todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() toggle = new EventEmitter();
    @Output() delete = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);  
    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}