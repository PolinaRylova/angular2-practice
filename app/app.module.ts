// главный модуль приложения
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({ // аннотация говорит Angular, что необходимо
    imports: [BrowserModule, FormsModule], // импортировать модуль браузера и модуль для работы с формами
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
    ], // далее объявляем компоненты
    bootstrap: [AppComponent] // для запуска приложения использовать компонент
})
export class AppModule {

}