//  Задание 2
// 1. Найти остаток от деления двух переменных
// a. let a = 13;
// b. let b = 5;
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. let a;
// b. alert(a); 
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('abc' * 3);
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert( 1 / 0);
// b. alert(-1 / 0);
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('2' * '3');


// 1
let a = 13;
let b = 5;
let remDiv = a % b;
// console.log(`Остаток от деления: ${remDiv}`);
// 2
let num;
alert(num); // undefined

// 3
alert('abc' * 3); // Nan

// 4
alert( 1 / 0); // Infinity
alert(-1 / 0); // -Infinity

// 5
alert('2' * '3'); // 6

// Задание 3 
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что 
// ошибка появляется в консоли. Определите, в какой строке кода 
// случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы данных 
// переменных
// a. let a = '2';
// b. let b = '3';

let num2 = '2';
let num3 = '3';
console.log(num2 + num3); // 23


// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль 
// вывести текст
// a. Сумма чисел равна “результат”
// b. Разность чисел равна “результат”
// c. Произведение чисел равно “результат”
// d. Частное чисел равно “результат”
// e. Остаток от деления чисел равен “результат”

let userNum = Number(prompt(`Введите первое число`));
let userNum2 = Number(prompt(`Введите второе число`));
let sumOfNum = userNum + userNum2;

//alert(`Сумма чисeл равна ${sumOfNum}`); // вариант 2
alert(`Сумма чисeл равна ` + sumOfNum);


// Задание 4 (тайминг 15 минут)
// 1. Не запуская код, определите, что выведется в консоль: 
console.log(String(true)); // true
// 2. Не запуская код, определите, что выведется в консоль:
console.log('a' + true);  // atrue
// 3. Не запуская код, определите, что выведется в консоль:
console.log(Number(true)); // 1
// 4. Не запуская код, определите, что выведется в консоль:
console.log(true + 1); // 2
// 5. Не запуская код, определите, что выведется в консоль:
console.log(true + true) // 2
// 6. Не запуская код, определите, что выведется в консоль:
console.log(true - true) // 0
// 7. Не запуская код, определите, что выведется в консоль:
console.log( String(true) + Number(true) ) // true1

// Задание 5 (тайминг 25 минут)
// 1. Пользователь с клавиатуры вводит число, Необходимо создать 
// условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”

let number = Number(prompt(`Введите число`));

if (number > 5) {
    alert(`Число больше 5`);
} if (number < 5 ) {
    alert(`Число меньше 5`);
} else {
    alert(`Число равно 5`);
}

// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и 
// выведите соответствующее сообщение.

let test1 = 88;
let test2 = 88;
(test1 === test2) ? alert(`Равны`) : alert(`Не равны`);

// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное

let first = Number(prompt(`Введите первое число`));
let second = Number(prompt(`Введите первое число`));

if (first > second) {
    alert(`Минимальное число ${second}`);
} else {
    alert(`Минимальное число ${first}`);
}
// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная 
// переменная больше нуля и меньше 15

let count = Number(prompt(`Введите число больше 0 и меньше 15`));
alert((count >= 0 && count <= 15) ? `Соответствует условиям` : `Не соответствует условиям`);

