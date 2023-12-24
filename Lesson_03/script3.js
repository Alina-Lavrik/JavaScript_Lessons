
// let age = Number(prompt('Сколько вам лет?'))

// // создаем стрелочную функцию nfn (name function name) 

// const upAge = () => age + 5;

 
// // вызываем функцию upAge() и выводим результат

// console.log(`Через 5 лет вам будет ${upAge()}`);



// // формула расчета налога из зп

// const salary = (money) => {   // в money подставляет значение которое ввел пользователь
//     money = money * 0.87;   // считает первую функцию
//     return money * 0.75;   // считает вторую функцию
// }

// // спрашиваем у пользователя
// const wokerMoney = Number(prompt('Сколько ты зарабатываешь'));


// // возращает значение wokerMoney - сколько остается после всех налогов
// //console.log(salary(wokerMoney));

// let moneyMonth = salary(wokerMoney);

// console.log(`Для расходов можно использовать ${salary(wokerMoney)}`);

// console.log(`На еду можно потратить не более чем ${moneyMonth * 0.3}`);


// function sayHello() {
//     alert('Привет');
//     alert('Заказ оформлен')
// }

/*Игра в загадки */

/*Создаем функцию, которая зависит от 2 параметров answer и question */

function askQuest(answer, question) {
    const userAnswer = prompt(question);
/* toLowerCase() - сделает слово в нижнем регистре */ 
    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    } 
}

/*Чтобы запустить функцию*/ 
function puzzle() {
    askQuest('лук', 'Сидит детд во 100 шуб одет, кто его раздеает тот слезы проливает');
    askQuest('елка', 'Зимой и летом одним цветом');
}
