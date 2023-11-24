let length = prompt("Size of array:");
let array = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Enter element " + i + ":");
    array.push(element);
}

console.log("Your array:", array);

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (parseInt(array[j]) > parseInt(array[j + 1])) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", array);