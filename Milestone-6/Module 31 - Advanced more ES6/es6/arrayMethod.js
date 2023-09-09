// Array methods forEach, map, find, filter and reduce


// Array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// forEach
// const result = array.forEach((item) => console.log(item))
// console.log(result) // undefined

// map
// const result1 = array.map((item) => console.log(item))
// console.log(result1) // pass a array

// find
// const result2 = array.find((item) => item === 2)
// console.log(result2) // pass result

// filter
// const result3 = array.filter((item) => item % 2 === 0)
// console.log(result3) // pass result

// reduce
const sum = array.reduce((acc, item) => acc + item, 0);
console.log(sum); // result