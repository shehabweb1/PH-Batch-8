function cubeNumber(input) {
    if (typeof input !== 'number') {
        return "This is invalid";
    }

    return input ** 3;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
