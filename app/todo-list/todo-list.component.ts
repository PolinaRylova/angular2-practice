import { Component } from '@angular/core';

import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list/todo-list.component.html',
    styleUrls: ['./app/todo-list/todo-list.component.css']
})
export class TodoListComponent {
    todos: Todo[] = todos;

    completeToggle(todo: Todo) {
        todo.completed = !todo.completed; 
     }
 
     deleteTodo(todo: Todo) {
         let index = this.todos.indexOf(todo);
 
         if(index > -1) {
            this.todos.splice(index, 1); 
         }
     }
}