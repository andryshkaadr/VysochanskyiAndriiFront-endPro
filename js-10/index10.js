let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Знайти суму та кількість позитивних елементів.
let sumPositive = 0;
let countPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositive += arr[i];
        countPositive++;
    }
}

console.log("Сума та кількість позитивних елементів:", sumPositive, countPositive);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
}

console.log("Мінімальний елемент та його порядковий номер:", minElement, minIndex);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}

console.log("Максимальний елемент та його порядковий номер:", maxElement, maxIndex);

// 4. Визначити кількість негативних елементів.
let countNegative = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegative++;
    }
}

console.log("Кількість негативних елементів:", countNegative);

// 5. Знайти кількість непарних позитивних елементів.
let countOddPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        countOddPositive++;
    }
}

console.log("Кількість непарних позитивних елементів:", countOddPositive);

// 6. Знайти кількість парних позитивних елементів.
let countEvenPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        countEvenPositive++;
    }
}

console.log("Кількість парних позитивних елементів:", countEvenPositive);

// 7. Знайти суму парних позитивних елементів.
let sumEvenPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        sumEvenPositive += arr[i];
    }
}

console.log("Сума парних позитивних елементів:", sumEvenPositive);

// 8. Знайти суму непарних позитивних елементів.
let sumOddPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        sumOddPositive += arr[i];
    }
}

console.log("Сума непарних позитивних елементів:", sumOddPositive);

// 9. Знайти добуток позитивних елементів.
let productPositive = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        productPositive *= arr[i];
    }
}

console.log("Добуток позитивних елементів:", productPositive);

// 10. Знайти найбільший серед елементів масиву, останній обнулити.
let maxElementReset = arr[0];
let maxIndexReset = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElementReset) {
        maxElementReset = arr[i];
        maxIndexReset = i;
    }
}

arr[maxIndexReset] = 0;

console.log("Найбільший серед елементів масиву:", arr);