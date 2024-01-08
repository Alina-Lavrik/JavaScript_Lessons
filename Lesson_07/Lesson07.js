
// /*Цикл for */

// for (let index = 0; index < 3; index++) {
//     console.log('Hello');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
    
// }

/*Проверка пароля */

// let pass;
// let count = 0;

// do {
//     if (count >= 3) {
//         alert('Пароль неверный!')
//     }
//     pass = Number(prompt("Введите пароль"))
//     count++;
    
// } while (pass !== 234);


/*Массив */

// const arr = [1, 99, 'Happy', 33, 8];
// console.log(arr);
// console.log(arr[2]); // элемент под индексом 2
// console.log(arr.length); // длина массива
// console.log(arr[arr.length - 1]); // вывод последнего элемента массива

// const user = [];

// let userName = prompt('Введите ваше имя');
// user.push(userName);
// let userSurname = prompt('Введите вашу фамилию');
// user.push(userSurname);
// let userAge = Number(prompt('Введите ваш возраст'));
// user.push(userAge);

// user.push(prompt('Введите ваше имя'));
// user.push(prompt('Введите вашу фамилию'));
// user.push(Number(prompt('Введите ваш возраст')));

// console.log(user);

// const numbers = [9, 8, 7, 6, 88];

// alert(`Запомни цифры ${numbers}`);

// console.log(numbers[numbers.length - 1]);
// console.log(numbers.pop()); // убирает последний элемент из массива
// console.log(numbers);

// const word = 'beautiful'; // создали масств
// const arrayWord = word.split(''); // разделить слово побуквенно
// console.log(arrayWord);
// const upWord = arrayWord.pop(); // извлечь последний элемент
// arrayWord.push(upWord.toLocaleUpperCase()); // последний элемент сделали заглавной и push добвили к слову
// console.log(arrayWord.join('')); // соединить все элементы

const array = [33, 44, 55, 22, 88];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 40) {
        console.log(element);
    } else {
        continue;
    }
}

console.log(array.indexOf('22'));

const arrayElement = ['ёлка', 'елка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrayElement.length; i++) {
    const element = arrayElement[i];
    if (element === userAnswer) {
        console.log('Молодец');
        break;
    } else {
        continue;
    }
    
}