// главный модуль приложения
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({ // аннотация говорит Angular, что необходимо
    imports: [BrowserModule], // импортировать модуль браузера
    declarations: [AppComponent], // далее объявляем компонент
    bootstrap: [AppComponent] // для запуска приложения использовать компонент
})
export class AppModule {

}