//// Задание 1

const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// вариант 2
array.forEach(element => {
    console.log(element)
});

const arrA = ['happy', 'new', 'year', '!!!'];
console.log(arrA.length);

const array2 = ['a', 'b', 'c'];
console.log(array2);
const array3 = array2.slice(3);
array3.push('1', '-2', '-3'); 
console.log(array3);


// Задание 2

const array4 = [1, 2, 3];
for (let i = 0; i < array4.length; i++) {
    array4[i]++;
}
console.log(array4);

const arr30 = [];
arr30[3] = 'a';
arr30[8] = 'b';
console.log(arr30.length);  // 9

const arr2 = [1, 2, 3];
arr2.push(4, 5);
console.log(arr2);

const newArray = [22, 33, 44, 55, 88];
newArray.pop();
newArray.shift();
console.log(newArray.length);  // 3
console.log(newArray);

// вариант 2
const newArray2 = newArray.slice(2);
console.log(newArray2.length);  // 3
console.log(newArray2);

// Задание 3

for (let i = 11; i < 34; i++) {
    console.log(i);
}


for (let i = 1; i < 100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    } 
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}


let num = 5;
let a = 0;
while (num < 1000) {
    num = num * 3;
    a++;
}
console.log(a, num);

// Задание 4

const arrAy = [2, 5, 9, 15, 1, 4]; 
arrAy.map(value => {
    if (value > 3 && value < 10) {
       console.log(value);
    }   
})

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i%2 === 0) {
        sum = sum + i;
    } 
}
console.log(sum); // 2550

const array5 = [2, 5, 9, 3, 1, 4];
let sum2 = 0;

for (let i = 0; i < array5.length; i++) {
    sum2 = sum2 + array5[i];  
}
console.log(sum2); // 24

// вариант 2 

const array9 = [2, 5, 9, 3, 1, 4];
let sum9 = 0;

array5.forEach(function (value) {
    sum9 = sum9 + value;
});
console.log(sum9); // 24


let line = "-";

for (let i = 1; i <= 9; i++) {
    line = line + i + "-";
}
console.log(line);


const array6 = [2, 5, 9, 0, 3, 1, 4];
let i = 0;
while (array6[i] !== 0 && i < array6.length) {
    console.log(array6[i]);
    i++;
}

// Задание 5 

const array7 = [33, 10, 22, 40, 55, 20, 12, 71, 9, 88];

const newArray7 = array7.map(value => {
    return value % 2 === 0 ? Math.pow(value, 2) : (value % 3  === 0 ? Math.pow(value, 3) : value)
});
console.log(newArray7);

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let sumOfThree = 0;

arr.forEach(element => {
    if (element === 3) {
        sumOfThree++;
    }
});
console.log(sumOfThree); // 4


const array8 = [1, 2, 3, 4, 5];

array8.splice(1, 2);
console.log(array8);