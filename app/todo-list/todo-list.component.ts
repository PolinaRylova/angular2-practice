import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list/todo-list.component.html',
    styleUrls: ['./app/todo-list/todo-list.component.css']
})
export class TodoListComponent {
    @Input() todos: Todo[];
 
     deleteTodo(todo: Todo) {
         console.log('deleteTodo');
         let index = this.todos.indexOf(todo);
 
         if(index > -1) {
            this.todos.splice(index, 1); 
         }
     }
}