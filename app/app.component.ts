import { Component } from '@angular/core';

const todos = [
    'Изучить Angular 2 и CLI',
    'Прочитать документацию по изменениям Angular 4',
    'Переписать проект Keksobooking с native js на Angular'
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
}