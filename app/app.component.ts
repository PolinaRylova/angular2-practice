import { Component } from '@angular/core';

/* интерфейс - контракт/договор, описывающий, какие св-ва и методы должен иметь класс
перед названием интерфейса принято указывать букву I, чтобы явно указать, что это интерфейс, а не класс, например
interface ITodo {
    title: string;
    completed: boolean;
}*/
// Ещё одним способом определения типа объекта является Класс. 
// На основе Класса, в отличие от Интерфейса, мы можем создать объект (интерфейс просто описывает)

class Todo {
    constructor(public title: string, 
                public completed: boolean = false){}
}

const todos: Todo[] = [
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
    title: string = 'Angular 2 ToDo';
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