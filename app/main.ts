// файл, импортирующий основной модуль приложения и запускающий его
//импортируем платформу, на которой будет работать приложение
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//импортируем также основной модуль приложения
import { AppModule } from './app.module';
// сохраним в постоянную переменную экземпляр платформы, на которой будет работать приложение
const platform = platformBrowserDynamic();
//в метод bootstrapModule необходимо отправить основной модуль приложения 
platform.bootstrapModule(AppModule);