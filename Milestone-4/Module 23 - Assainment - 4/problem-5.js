function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "Must be input an array";
    }

    const sumOfChange = changeArray.reduce((acc, val) => acc + val, 0);

    const finalResult = sumOfChange >= totalDue;

    return finalResult;
}

console.log(canPay([], 5));
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));