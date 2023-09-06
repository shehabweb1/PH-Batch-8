function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    return arr.sort((a, b) => a - b);
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
console.log(sortMaker([0, 1])); 
console.log(sortMaker([3, "abc"]));