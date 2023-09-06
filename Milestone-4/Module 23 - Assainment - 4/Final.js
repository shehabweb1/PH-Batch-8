function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "This is invalid";
    }
    return number ** 3;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid String";
    }
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }
    if (arr[0] === arr[1]) {
        return "equal";
    }
    return arr.sort((a, b) => a - b);
}

function findAddress(obj) {
    const result = Object.values(obj).map(value => value || '__').join(',');
    return result;
}
const address1 = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};
const address2 = {
    street: 10,
    house: "",
    society: "Earth Perfect"
};
const address3 = {
    street: 10,
    house: "",
    society: ""
};

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "Must be input an array";
    }
    const sumOfChange = changeArray.reduce((acc, val) => acc + val, 0);
    const finalResult = sumOfChange >= totalDue;
    return finalResult;
}