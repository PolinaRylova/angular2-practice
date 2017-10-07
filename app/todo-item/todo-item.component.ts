import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo-item/todo-item.component.html',
    styleUrls: ['./app/todo-item/todo-item.component.css']
})
export class TodoItemComponent {
    // укажем Angular с помощью декоратора, что данный компонент принимает свойство
    @Input() todo: Todo;
    // укажем, что данный экземпляр класса EventEmitter является выходными данными 
    // (служит для генерации событий и предоставляет интерфейс для подписки на эти события) 
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);  
    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}