// Задание 1 

// 1. Написать функцию, которой передаем, имя, фамилия и 
// возраст, и получаем строку "Привет Иван Петров с 
// возрастом 17" (только здесь данные, которые были 
// переданы в функцию)

let nameUser = (prompt('Ваша фамилия и имя?'))
let ageUser = Number(prompt('Сколько вам лет?'))

//console.log(`Привет ${nameUser} возрастом ${ageUser}`);

alert(`Привет ${nameUser} возрастом ${ageUser}`);

// 2. Создайте функцию которая возводит переданное число в квадрат

let num = Number(prompt('Введите число'))

const square = () => num * num; // создаем стрелочную функцию nfn (name function name) 
//console.log(`Ваше число в квадрате ${square()}`);
alert(`Ваше число в квадрате ${square()}`);

// 3. Сделайте функцию, которая параметром принимает 
// число и проверяет, положительное это число или 
// отрицательное. В первом случае пусть функция выводит 
// в консоль текст '+++', а во втором '---'.

let num1 = Number(prompt('Введите число'))
alert((num1 >= 0) ? `+++` : `---`);

// Задание 2

// 1. Сделайте функцию, которая параметрами принимает 3 числа и 
// выводит в консоль сумму этих чисел.

let number1 = Number(prompt('Введите первое число'))
let number2 = Number(prompt('Введите второе число'))
let number3 = Number(prompt('Введите третье число'))

const sumOfNumbers = () => number1 + number2 + number3; // создаем стрелочную функцию nfn (name function name) 
console.log(`Сумма трех чисел ${sumOfNumbers()}`);


// 2. С помощью созданной вами функции выведите в консоль сумму 
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

function sumOfParams (param1, param2, param3) {
    console.log(param1 + param2 + param3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

sumOfParams(param1, param2, param3);

// 3. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
// Расскажите, каким будет результат каждого из вызовов функции.
func(2); // 4
func(3); // 9
func(); // 25

// Задание 3

// 1. Сделайте функцию, которая параметром принимает число, а 
// возвращает квадратный корень из этого числа. С помощью этой 
// функции найдите корень числа 3, затем найдите корень числа 4. 
// Просуммируйте полученные результаты и выведите их в консоль.

function countRoot(figure) {
    return Math.sqrt(figure);
    }

let num1 = countRoot(3); 
let num2 = countRoot(4);

console.log(`Сумма чисел ${num1 + num2}`);

// 2. Создайте функцию, которая находит минимальное число из 2х 
// передаваемых аргументов функции

function minNumber(index1, index2){
    if (index1 > index2) {
        console.log(`Минимальное число ${index2}`);
    } else {
        console.log(`Минимальное число ${index1}`)
    }
}

//minNumber(10, 15);

let index1 = Number(prompt('Введите первое число'))
let index2 = Number(prompt('Введите второе число'))

minNumber(index1, index2);

//Задание 4

// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

function dayQuest(dayOfWeek) {
switch (dayOfWeek) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;   
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break; 
    default:
        console.log('Нет такого дня')
        break;
    }
}

let dayWeek = Number(prompt('Введите число от 1 до 7'))
dayQuest(dayWeek);

