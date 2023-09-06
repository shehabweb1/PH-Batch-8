/* 
  * 1. Display "Ajke amar mon valo nei" for 39 times
*/

for (let i = 0; i < 39; i++){
    // console.log("Ajke amar mon valo nei")
}


/* 
 * 2. Display numbers between 58 to 98
*/

for (let i = 5; i <= 98; i++){
    // console.log(i)
}

/**
 * 3. Show all even numbers from 412 to 456
*/

for (let i = 412; i <= 456; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}
/**
 * 4. Show all odd numbers from 581 to 623
*/

for (let i = 581; i <= 623; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
}


/**
 * 5. Difference between while loop and for loop
 * Ans: While Loop:
    The while loop repeatedly executes a block of code as long as a specified condition is true. It consists of a condition and the code block to be executed. The condition is evaluated before each iteration.
    Syntax:
        while (condition) {
            // Code to be executed  
        }

    Example:
        let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }
    
    For Loop:
    The for loop is used for iterating over a sequence of numbers or elements a specific number of times. It has a more structured syntax, including initialization, condition, and iteration expressions. The loop initializes a counter, checks a condition, executes the code block, and updates the counter after each iteration.
    Syntax:
        for (initialization; condition; iteration) {
            // Code to be executed
        }


    Example:
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
*/

/**
 * 6. Declare an array for all the topics that you have learned last few days display then output.
*/

const topics = ["html", "css", "js", "bootstrap", "tailwind", "daisyUI"];
for (let i = 0; i < topics.length; i++) {
    // console.log(topics[i]);
}

/**
 * 7. Create an array for all the mobile phones. Display all elements in the array by using the a while loop
*/

let mobilePhones = ["iPhone", "Samsung", "Google Pixel", "OnePlus", "Xiaomi"];

let i = 0;
while (i < mobilePhones.length) {
    // console.log(mobilePhones[i]);
    i++;
}

/**
 * 8. Run a loop from 30 to 86. this loop will stop when find out highest value  
*/

let highestValue = 0;
let currentNumber = 30;

while (currentNumber <= 86) {
    if (currentNumber > highestValue) {
        highestValue = currentNumber;
    }
    currentNumber++;
}

// console.log("The highest value is: " + highestValue);


/**
 * 9. Write the price of the books that you have. Display the price if the price is lower then 200
*/

let bookPrices = [150, 220, 180, 190, 250, 120, 300];

for (let i = 0; i < bookPrices.length; i++) {
    if (bookPrices[i] < 200) {
        console.log("Book price: $" + bookPrices[i]);
    }
}