import { Component } from '@angular/core';

const todos = [
    {
        title: 'Изучить Angular 2 и CLI',
        completed: true
    },
    {
        title: 'Прочитать документацию по изменениям Angular 4',
        completed: false
    },
    {
        title: 'Переписать проект Keksobooking с native js на Angular',
        completed: false
    }    
];

@Component({
    selector: 'app', // название тэга в html-файле, в который будет рендериться компонент
    // путь к файлам шаблона и стилей указывать относительно index.html
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title = 'Angular 2 ToDo';
    todos = todos;

    completeToggle(todo: any) {
       todo.completed = !todo.completed; 
    }

    deleteTodo(todo: any) {
        let index = this.todos.indexOf(todo);

        if(index > -1) {
           this.todos.splice(index, 1); 
        }
    }
}