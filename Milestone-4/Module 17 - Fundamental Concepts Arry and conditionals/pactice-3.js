/**
 * You are given three numbers 13, 79, and 45. Write a program that will print the
    largest number using if-else.
**/
if (13 > 79 && 13 > 45) {
    console.log(13);
} else if (79 > 13 && 79 > 45) {
    console.log(79);
} else {
    console.log(45);
}



/**
 * You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
    triangle is Isosceles or not using if-else.

 * Isosceles => two sides are equal
**/
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("This is an Isosceles triangle");
} else {
    console.log("This is not an Isosceles triangle");
}