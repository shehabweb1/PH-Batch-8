// JavaScript Promises

const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        myResolve("I love You !!");
    }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});



//   Default Parameter Values
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(5); // will return 15



//   Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// Array keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}


// Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}