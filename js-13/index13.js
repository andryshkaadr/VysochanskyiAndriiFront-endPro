//Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverage(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }

    if (count === 0) {
        return "немає числових елементів";
    }

    return sum / count;
}

let array1 = [2, '122', 15, 'abc', 3];
let average = calculateAverage(array1);
console.log("Середнє арифметичне числових елементів:", average);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
//вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x**y;
        default:
            return "Невідома операція";
    }
}

let x = 3;
let y = 2;
let znak = "/";

//Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.
let result = doMath(x, znak, y);
console.log(`${x} ${znak} ${y} = ${result}`);

function fillArray(rows, cols) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        let innerArray = [];
        for (let j = 0; j < cols; j++) {
            let element = prompt(`Значення для елемента (${i}, ${j}):`);
            innerArray.push(element);
        }
        array.push(innerArray);
    }

    return array;
}

let rows = parseInt(prompt("Кількість рядків:"));
let cols = parseInt(prompt("Кількість стовпців:"));

let userArray = fillArray(rows, cols);
console.log("Двомірний масив:", userArray);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.

function removeChars(str, charsToRemove) {
    for (let char of charsToRemove) {
        str = str.split(char).join('');
    }
    return str;
}

let inputString = prompt("Введіть рядок:");
let charsToRemove = prompt("Введіть символи для видалення:").split('');

let resultString = removeChars(inputString, charsToRemove);
console.log("Рядок після видалення символів:", resultString);