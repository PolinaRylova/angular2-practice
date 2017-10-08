import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {   
                id: 1,
                title: 'Изучить Angular 2 и CLI',
                completed: true
            },
            {
                id: 2,
                title: 'Прочитать документацию по изменениям Angular 4',
                completed: false
            },
            {
                id: 3,
                title: 'Переписать проект Keksobooking с native js на Angular',
                completed: false
            }    
        ];

        return { todos }
    }
}