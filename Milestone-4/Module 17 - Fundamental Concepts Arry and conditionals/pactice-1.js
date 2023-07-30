// Array
var fruits = ['Apple', 'Banana', 'Orange'];

// Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’
var findIndex = fruits.indexOf('Banana');
console.log(findIndex)
fruits[1] = "Mango";
console.log(fruits)

// Remove ‘Orange’ and add ‘Watermelon’
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);