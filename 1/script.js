alert(`Список команд: 
1)'add, Имя' (Добавить элемент)
2) 'del, Имя' (Удалить последний элемент)
3) 'end' (т.е выводится конечный резльтат)`);
var arr = [];
var firstCom = 'add';
var secondCom = 'del';
var thirdCom = 'end';

i = 0;  
while (20 > 1) {
    var com = prompt('Введите команду!');
    if (com == firstCom) {
        var name = prompt('Введите имя');
        arr.push(name)
    }else if(com == secondCom) {
        arr.pop();
    }else if (com == thirdCom) {
        console.log('Конечный результат' + arr);
        break;
    }
    console.log(arr);
    
    i++
}
