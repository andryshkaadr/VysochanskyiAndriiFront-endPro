function addToSum() {
    let summary = 0;
    function addition(number) {
        summary+=number;
        console.log(summary);
        return summary;
    }
    return addition;
}

const sum = addToSum();

sum(3);
sum(5);
sum(20);