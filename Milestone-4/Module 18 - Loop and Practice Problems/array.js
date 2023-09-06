/* **ARRAY** */

/**
 * 1. What is the purpose of Array?
 * Ans: An array is a fundamental data structure in programming that serves the purpose of storing and organizing multiple values of the same data type under a single variable name. Arrays allow you to work with collections of data more efficiently by providing an ordered sequence of elements. Each element in an array is identified by its index, which represents its position within the array.
   
   The primary purposes of arrays are as follows:

   1. **Grouping Data**: Arrays are used to group related pieces of data together. For example, you might use an array to store a list of numbers, names, or other similar types of information.
   2. **Ordered Storage**: Arrays maintain the order of elements. The position of an element in an array is defined by its index, allowing you to access elements in a predictable and consistent manner.
   3. **Access and Retrieval**: Arrays provide a way to access individual elements by their index. This makes it easy to retrieve specific elements from the collection based on their positions.
   4. **Iteration**: Arrays can be easily iterated using loops or array-specific methods. This allows you to perform the same operation on each element in the array.
   5. **Manipulation and Modification**: Arrays support various methods for adding, removing, and modifying elements. This makes it convenient to change the content of an array dynamically.
   6. **Efficient Storage**: Arrays allocate memory for a fixed number of elements, which makes memory management more efficient compared to using separate variables for each element.
   7. **Data Organization**: Arrays are commonly used to store data that needs to be organized in a sequential or list-like structure, such as a list of items in a shopping cart, a collection of user names, or scores in a game.

   Arrays are a versatile and essential tool in programming. They are used in various scenarios to efficiently manage and work with collections of related data.
 * 
 * 2. How to declare an array in JS?
 * Ans: Here's a simple example of an array in JavaScript:

   let numbers = [3, 7, 1, 9, 2]; // An array of numbers

   console.log(numbers[0]); // Output: 3 (accessing the first element)
   console.log(numbers[3]); // Output: 9 (accessing the fourth element)
 * 
 * 3. Number of elements An Array.
 * Ans: The number of elements in an array is often referred to as the "length" of the array. In JavaScript, you can find the length of an array using the `length` property. The `length` property returns the number of elements in the array, including both defined and undefined elements.

   Here's an example:

   let numbers = [3, 7, 1, 9, 2];
   let length = numbers.length;
   console.log("The length of the array is: " + length); // Output: The length of the array is: 5

   In this example, the array `numbers` contains 5 elements, and the value of the `length` property is 5.
   It's important to note that the `length` property reflects the highest index in the array plus one. If there are gaps in the indices (for example, if you've removed elements), the `length` property won't accurately represent the number of actual elements in the array.
 * 
*/

// Common Array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* 4. What is index? */
const firstIndex = array[0] // Array index start 0, here is index is 0

/* 5. Find the value of an element by index */
const value = array.indexOf(7) // Use arrayName.indexOf("value")

/* 6. Change an element by index */
array[1] = 20; // use arrayName[indexNumber] = newValue

/* 7. get the index of an element by the value */
const secondIndex = array[1]

/* 8. What does it mean when you get undefined while getting the value of an element */
const undefinedValue = array[10]; // this index is undefined

/* 9. How can you add an element to an array at the last position */
const addLastValue = array.push(10);

/* 10. How can remove the last element from array */
const removeLastValue = array.pop();

/* 11. Add an element at the first position of an array */
const addFirstValue = array.unshift(10);

/* 12. Remove the first element of an array */
const removeFirstValue = array.shift();
