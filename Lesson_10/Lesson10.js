// Задание 1 

// 1. Создайте объект с ключами от 1 до 7, в качестве 
// значений содержащий имена дней недели. Выведите на 
// экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’. 
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое 
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname


const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
console.log(week[2]);

  

const user = {
    name: "Jonny",
    surname: "Dep",
    age: 45,
}
console.log(user.name + " - " + user.surname + " - " + user.age);

user.middleName = prompt('Введите отчество');
console.log(user.name + " - " + user.surname + " - " + user.age + " - " + user.middleName);

delete user.surname;
console.log(user.name + " - " + user.surname + " - " + user.age + " - " + user.middleName);


// Задание 2 
// 1. Даны два массива: первый с названиями дней недели, а второй - с 
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут 
// названия дней, а значениями - их номера.
// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент 
// этого объекта в квадрат

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

for (const key in arr1, arr2) {
    console.log(arr1[key] + " - " + arr2[key]);
}

const obj = {x: 1, y: 2, z: 3};
for (const key in obj) {
    console.log(obj[key] * obj[key]);
}

// Вариант 2
Object.values(obj).map(function (value) {
    console.log(value * value)
});

// Задание 3 Найдите сумму элементов приведенного объекта.
const object = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let total = 0;
Object.values(object).map(function (value) {
    Object.values(value).map(function (value) {
        total = total + value;
    })
});
console.log(total);



// Задание 4 
// 1. Создайте объект riddles 
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя 
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы 
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил 
// неверно

const riddles = {
    question: "I fly, yet I have no wings",
    answer: "cloud",
    askQuestion: function name(params) {
        let getAnswer = prompt(this.question);
        if (getAnswer === this.answer) {
            console.log("You are win :)!");
        } else {
            console.log("You are lose :(");
        }
    }
}
riddles.askQuestion();


// ДЗ Задание 1 Необходимо в консоль вывести все значения больше или равные 3.

const numbers = { 
    keyin1: 1, 
    keyin2: 2, 
    keyin3: 3, 
    keyin4: 4, 
    keyin5: 5, 
    keyin6: 6, 
    keyin7: 7, 
}

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// ДЗ Задание 2 Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = { 
    author: "John", // вывести этот текст 
    postId: 23, 
    comments: [ 
        { 
        userId: 10, 
        userName: "Alex", 
        text: "lorem ipsum", 
        rating: { 
            likes: 10, 
            dislikes: 2, // вывести это число 
            }, 
        }, 
        { 
        userId: 5, // вывести это число
        userName: "Jane", 
        text: "lorem ipsum 2", // вывести этот текст 
            rating: { 
            likes: 3, 
            dislikes: 1, 
            }, 
        }, 
    ], 
}; 

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Вариант 2
console.log(`${post.author}
${post.comments[0].rating.dislikes}
${post.comments[1].userId}
${post.comments[1].text}
`);

//ДЗ Задание 3 Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products2 = [ 
    { 
    id: 3, 
    price: 200, 
    }, 
    { 
    id: 4, 
    price: 900, 
    },
    { 
    id: 1, 
    price: 1000, 
    }, 
]; 

let priceDisc = "";

products2.forEach(element => { 
    priceDisc = priceDisc + " " + element.price * 0.85;
});
console.log(priceDisc); 

// ДЗ Задание 4

const products = [
    {
    id: 3,
    price: 127,
    photos: ["1.jpg","2.jpg",],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: ["3.jpg",],
    },
    {
    id: 8,
    price: 78,
    },
    ];


let arrayWithPhoto = products.filter(elem => elem.photos ? elem.photos.length : undefined);
console.log("[" + arrayWithPhoto[0].photos + "]" + "\n" + "[" + arrayWithPhoto[1].photos + "]" );


products.sort((a, b) => a.price - b.price);
console.log("[" + products[0].price + ", " + products[1].price + ", " + products[2].price + ", " + products[3].price + "]");

// Задание 5

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

for (const key in en, ru) {
        console.log(en[key] + ": " + ru[key]);
}