import { Component } from '@angular/core';

@Component({
    selector: 'app', // название тэга в html-файле, в который будет рендериться компонент
    // путь к файлам шаблона и стилей указывать относительно index.html
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string = 'Angular 2 ToDo';
}