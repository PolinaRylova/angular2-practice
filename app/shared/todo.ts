/* интерфейс - контракт/договор, описывающий, какие св-ва и методы должен иметь класс
перед названием интерфейса принято указывать букву I, чтобы явно указать, что это интерфейс, а не класс, например
interface ITodo {
    title: string;
    completed: boolean;
}*/
// Ещё одним способом определения типа объекта является Класс. 
// На основе Класса, в отличие от Интерфейса, мы можем создать объект (интерфейс просто описывает)

export class Todo {
    constructor(public title: string, 
                public completed: boolean = false){}
}