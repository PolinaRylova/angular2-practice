import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo-item/todo-item.component.html',
    styleUrls: ['./app/todo-item/todo-item.component.css']
})
export class TodoItemComponent {
    // укажем Angular с помощью декоратора, что данный компонент принимает свойство
    @Input() todo: Todo;
}