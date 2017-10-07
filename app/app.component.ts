import { Component } from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string = 'Angular 2 ToDo';
    todos: Todo[] = todos;

    create(title: string) {
        const todo = new Todo(title);
    }
}