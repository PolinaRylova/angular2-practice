// главный модуль приложения
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({ // аннотация говорит Angular, что необходимо
    imports: [BrowserModule, FormsModule], // импортировать модуль браузера и модуль для работы с формами
    declarations: [AppComponent], // далее объявляем компонент
    bootstrap: [AppComponent] // для запуска приложения использовать компонент
})
export class AppModule {

}