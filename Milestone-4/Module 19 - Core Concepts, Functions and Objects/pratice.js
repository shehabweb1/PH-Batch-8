// Practice-1
function foo() {
    console.log("Foo");
    bar();
}

function bar() {
    console.log("Bar")
}

// foo();

// Practice - 2 & 3
function make_avg(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    const averageNumber = total / numbers.length;

    return averageNumber;
}

const numbers = [45, 66, 77];
const result = make_avg(numbers);

// console.log(result.toFixed(2))
