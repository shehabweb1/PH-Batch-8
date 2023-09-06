/* *VARIABLES* */


/**
 * 1. What is JavaScript?
 * Ans: JavaScript is a widely used programming language that is primarily used for creating interactive and dynamic content on websites. It allows developers to add functionality to web pages, enabling features like user interactions, animations, and real-time updates without requiring the user to reload the page. JavaScript is often used alongside HTML and CSS to build modern web applications. It can run in web browsers and, with the advent of technologies like Node.js, on server-side environments as well. It's a versatile language that has become a cornerstone of web development.
 * 
 * 2. How dose JS works?
 * Ans: JavaScript (JS) works as a scripting language that enables interactive and dynamic behavior in web pages. Here's a more detailed explanation of how it works:

    i. **Embedding JavaScript**: JavaScript code is typically embedded within HTML documents using the `<script>` element. This element can be placed in the `<head>` or `<body>` section of an HTML page. The browser encounters the `<script>` tag while parsing the HTML, and it triggers the execution of the JavaScript code.
    ii. **Interpreting and Execution**: When the browser encounters a `<script>` tag, it sends the contained JavaScript code to the browser's JavaScript engine for interpretation and execution. The JavaScript engine is a component of the browser responsible for understanding and running JavaScript code.
    iii. **Creating the Document Object Model (DOM)**: As the browser renders the HTML content of a web page, it constructs a hierarchical representation of the page's structure called the Document Object Model (DOM). JavaScript can interact with and manipulate this DOM, enabling dynamic changes to the content and structure of the webpage.
    iv. **Event-Driven Programming**: JavaScript is event-driven, meaning it can respond to events triggered by user actions (e.g., clicks, key presses) or other interactions (e.g., page load, data updates). Event listeners are set up in the JavaScript code to "listen" for specific events and execute predefined actions when those events occur.
    v. **Variables and Data Types**: JavaScript allows developers to declare variables to store and manage data. It supports various data types, including strings, numbers, booleans, arrays, and objects. Variables can be assigned values and manipulated within the code.
    vi. **Control Flow**: JavaScript supports control structures such as conditional statements (if, else) and loops (for, while) that control the flow of code execution. These structures enable developers to make decisions and repeat actions based on conditions.
    vii. **Functions**: Functions in JavaScript are blocks of code that can be defined and reused. They encapsulate specific logic and can accept arguments and return values. Functions promote code modularity and reusability.
    viii. **Asynchronous Programming**: JavaScript enables asynchronous operations, allowing code to run concurrently without blocking the main execution thread. This is crucial for tasks like making network requests or handling time-consuming operations without freezing the entire page.
    ix. **External Resources and APIs**: JavaScript can interact with external resources such as APIs to fetch data from servers, update content dynamically, and integrate with third-party services. This makes it possible to create data-driven applications and enhance user experiences.
    x. **Debugging and Development Tools**: Browsers provide developer tools that offer features like debugging, inspecting variables, monitoring network requests, and analyzing performance. These tools help developers identify and fix issues in their JavaScript code.

    In summary, JavaScript works by being embedded in HTML documents, interpreted by the browser's JavaScript engine, and interacting with the DOM and other browser features. It enables dynamic content, real-time interactions, and enhanced user experiences on web pages.
 *
 * 3. What is Variable?
 * Ans: A variable is a fundamental concept in programming that represents a storage location in memory to hold data. It's a named placeholder that can store different types of values, such as numbers, strings, booleans, objects, and more. Variables are essential for storing and managing data that a program uses for calculations, manipulations, and other operations.

    In most programming languages, including JavaScript, variables have the following characteristics:

    i. **Name**: A variable is identified by a name, which is used to access and manipulate its value. Variable names are typically chosen to be descriptive and meaningful, reflecting the purpose or content of the data they hold.
    ii. **Value**: The value of a variable is the data it currently holds. This value can be changed or updated during the course of a program's execution.
    iii. **Data Type**: Variables have a data type that determines the kind of data they can store. Common data types include numbers, strings, booleans, arrays, objects, and more. The data type affects the operations that can be performed on the variable and how the stored data is treated.
    iv. **Scope**: Variables have a scope that defines where they can be accessed and modified. Variables can have global scope (accessible throughout the entire program) or local scope (restricted to a specific block of code or function).
    v. **Assignment**: To give a variable a value, you use an assignment statement. This involves specifying the variable's name followed by an assignment operator (`=`) and the value you want to store.

    Variables are crucial for storing and managing data in programs, enabling developers to work with dynamic and changing information during the execution of their code.

 * 4. Declare a variable.    
 * Ans: Here's an example of defining and using a variable in JavaScript:
 
    // Variable declaration and assignment
    let age = 25; // Declares a variable named 'age' and assigns it the value 25

    // Using the variable
    console.log("My age is: " + age); // Output: My age is: 25

    // Changing the value of the variable
    age = 26;
    console.log("Now my age is: " + age); // Output: Now my age is: 26

    In this example, the variable `age` is declared using the `let` keyword and assigned the value `25`. Later, the value of `age` is updated to `26`.

 * 5. Types of Variable? How can you find out type of a variable.
 * Ans: In programming, variables can hold different types of data, and each type determines what kind of values the variable can store and the operations that can be performed on it. Here are some common data types and how you can find out the type of a variable in JavaScript:

    1. **Number**: Represents numeric values, including integers and floating-point numbers.
    let age = 25;

    2. **String**: Represents sequences of characters, such as text.
    let name = "Alice";

    3. **Boolean**: Represents a binary value, either `true` or `false`.
    let isStudent = true;

    4. **Array**: Represents an ordered collection of values, which can be of different types.
    let numbers = [1, 2, 3, 4, 5];

    5. **Object**: Represents a collection of key-value pairs, where each value can be of any data type.
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };

    6. **Undefined**: Represents the absence of a value. A variable is automatically initialized to `undefined` if it is declared but not assigned a value.
    let city; // undefined

    7. **Null**: Represents an intentional absence of any value or object.
    let status = null;

    To find out the type of a variable in JavaScript, you can use the `typeof` operator:
    let age = 25;
    let name = "Alice";
    let isStudent = true;

    console.log(typeof age); // Output: "number"
    console.log(typeof name); // Output: "string"
    console.log(typeof isStudent); // Output: "boolean"

    Keep in mind that the `typeof` operator returns a string indicating the type of the variable. However, it's important to note that `typeof null` returns `"object"`, which is a historical quirk in JavaScript.

    In addition to the `typeof` operator, there are also more advanced techniques for determining the type of a variable, such as using the `instanceof` operator or checking the constructor property of an object.
 * 
 * 6. Primitive and non-primitive data types.
 * Ans: In programming, data types can be broadly categorized into two main groups: primitive data types and non-primitive (also known as reference) data types. Let's explore each of these categories:

    **Primitive Data Types**:
    Primitive data types are basic types of data that represent single values. They are immutable, meaning their values cannot be changed after they are created. In most programming languages, primitive data types are directly manipulated and stored in memory. Here are some common primitive data types:

    1. **Number**: Represents numeric values, including integers and floating-point numbers. Examples: `5`, `3.14`.
    2. **String**: Represents sequences of characters (text). Examples: `"Hello, World!"`, `'JavaScript'`.
    3. **Boolean**: Represents binary values, either `true` or `false`. Examples: `true`, `false`.
    4. **Undefined**: Represents the absence of a value. Variables that are declared but not assigned a value are automatically initialized to `undefined`.
    5. **Null**: Represents an intentional absence of any value or object.
    6. **Symbol** (in some programming languages): Represents a unique and immutable value, often used as object property keys.

    **Non-Primitive (Reference) Data Types**:
    Non-primitive data types are more complex and can hold collections of values, functions, and objects. They are called "reference" data types because they store references (memory addresses) to the actual data stored in memory. Manipulating non-primitive data types often involves manipulating references rather than the actual values. Here are some common non-primitive data types:

    1. **Object**: Represents a collection of key-value pairs, where each value can be of any data type. Objects can hold various properties and methods.
    2. **Array**: Represents an ordered collection of values, which can be of different types. Arrays are a type of object with numbered indexes.
    3. **Function**: Represents a reusable block of code that performs a specific task.
    4. **Date**: Represents dates and times.
    5. **RegExp (Regular Expression)**: Represents a pattern used for pattern matching within strings.
    6. **Custom Objects**: Objects that are defined by programmers to model more complex data structures specific to their applications.

    It's important to note that non-primitive data types are often compared by reference, not by value. This means that two references to the same non-primitive value will point to the same memory location. Changes made through one reference will affect the value seen through the other reference.

    In summary, primitive data types represent basic values and are stored directly, while non-primitive data types are more complex and store references to the actual data stored elsewhere in memory. Understanding these distinctions is essential for effective programming and memory management.
 *
 * 7. Naming convention of JS variable.
 * Ans: When naming variables in JavaScript, it's important to follow certain naming conventions to ensure code readability, maintainability, and consistency. Here are some common naming conventions for JavaScript variables:

    1. **Camel Case**: In JavaScript, the most common convention for naming variables is camel case. Camel case involves writing compound words or phrases where each word (except the first one) starts with a capital letter, and there are no spaces or special characters.
    Example: `firstName`, `numOfItems`, `totalAmount`

    2. **Meaningful Names**: Choose variable names that are descriptive and provide clear meaning about the data or purpose of the variable. Avoid using single-character names or overly abbreviated names that are hard to understand.
    3. **Use Alphanumeric Characters**: Variable names can include letters (both lowercase and uppercase), numbers, and underscores (`_`). Avoid using special characters, spaces, or hyphens in variable names.
    4. **Start with a Letter**: Variable names must start with a letter (uppercase or lowercase) or an underscore. They cannot start with a number or any other character.
    5. **No Reserved Words**: Avoid using reserved keywords (such as `var`, `let`, `if`, `for`, etc.) as variable names.
    6. **Consistency**: Maintain consistent naming throughout your codebase. If you choose a certain naming convention, stick to it across all variables.
    7. **Use Lowercase for Built-in Objects**: JavaScript has built-in objects and functions (e.g., `Array`, `Math`, `String`). It's recommended to use lowercase for these objects to avoid confusion with custom variables.
    8. **Constants in Uppercase**: If you're declaring constants, which are variables with values that shouldn't change, use uppercase letters and underscores to separate words.
    Example: `const MAX_LENGTH = 100;`

    9. **Constructor Functions in Pascal Case**: If you're defining constructor functions (functions intended to be used with the `new` keyword), use Pascal case. This involves capitalizing the first letter of each word, including the first one.
    Example: `function Car(make, model) { ... }`

    Here are some examples of good variable names following these conventions:

    let firstName = "Alice";
    let numOfItems = 10;
    let totalAmount = 200.50;

    const MAX_LENGTH = 100;

    function calculateTotal(price, quantity) {
        return price * quantity;
    }

    By following these naming conventions, you'll create code that is more readable, easier to understand, and more maintainable, both for yourself and for other developers who might work with your code.
 * 
 * 8. Math Operator: +, -, *, /, %
 * 
 * 9. Short hand: +=, -=, *=, /=
 * 
 * 10. Increment ++, Decrement --
 * 
 * 11. parseInt, parseFloat
 * 
 * 12. toFixed
 *   
*/

/* ==== Math Operator: +, -, *, /, % ==== */

let a = 2;
let b = 3;

let x = a + b;
let y = a - b;
let z = a * b;
let w = a / b;
let h = a % b;

/* ==== Short hand: +=, -=, *=, /=, %= ==== */

x += y
x -= y
x *= y
x /= y
x %= y

/* ==== Increment ++, Decrement -- ==== */

a++;
b--;

/* ==== toFixed ==== */

a.toFixed(2); // Output: a = 2.00


/**
 * 1. জাভাস্ক্রিপ্ট একটি বহুল ব্যবহৃত প্রোগ্রামিং ভাষা যা প্রাথমিকভাবে ওয়েবসাইটগুলিতে ইন্টারেক্টিভ এবং গতিশীল সামগ্রী তৈরির জন্য ব্যবহৃত হয়। এটি ডেভেলপারদের ওয়েব পৃষ্ঠাগুলিতে কার্যকারিতা যোগ করার অনুমতি দেয়, ব্যবহারকারীর ইন্টারঅ্যাকশন, অ্যানিমেশন এবং রিয়েল-টাইম আপডেটের মতো বৈশিষ্ট্যগুলি সক্ষম করে, ব্যবহারকারীকে পৃষ্ঠাটি পুনরায় লোড করার প্রয়োজন ছাড়াই। জাভাস্ক্রিপ্ট প্রায়ই আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে HTML এবং CSS এর পাশাপাশি ব্যবহার করা হয়। এটি ওয়েব ব্রাউজারে এবং সার্ভার-সাইড পরিবেশেও Node.js-এর মতো প্রযুক্তির আবির্ভাবের সাথে চলতে পারে। এটি একটি বহুমুখী ভাষা যা ওয়েব বিকাশের মূল ভিত্তি হয়ে উঠেছে।
 * 
 * 2. JavaScript (JS) একটি স্ক্রিপ্টিং ভাষা হিসাবে কাজ করে যা ওয়েব পৃষ্ঠাগুলিতে ইন্টারেক্টিভ এবং গতিশীল আচরণ সক্ষম করে। এটি কীভাবে কাজ করে তার আরও বিশদ ব্যাখ্যা এখানে:

    i. **জাভাস্ক্রিপ্ট এম্বেড করা**: জাভাস্ক্রিপ্ট কোড সাধারণত `<script>` উপাদান ব্যবহার করে HTML নথির মধ্যে এমবেড করা হয়। এই উপাদানটি একটি HTML পৃষ্ঠার `<head>` বা `<body>` বিভাগে স্থাপন করা যেতে পারে। HTML পার্স করার সময় ব্রাউজারটি `<script>` ট্যাগের মুখোমুখি হয় এবং এটি জাভাস্ক্রিপ্ট কোড কার্যকর করতে ট্রিগার করে।
    ii.  **ইন্টারপ্রেটিং এবং এক্সিকিউশন**: যখন ব্রাউজার একটি `<script>` ট্যাগের মুখোমুখি হয়, তখন এটি অন্তর্নিহিত জাভাস্ক্রিপ্ট কোডটিকে ব্রাউজারের জাভাস্ক্রিপ্ট ইঞ্জিনে পাঠায় ব্যাখ্যা এবং সম্পাদনের জন্য। JavaScript ইঞ্জিন হল ব্রাউজারের একটি উপাদান যা JavaScript কোড বোঝা এবং চালানোর জন্য দায়ী।
    iii. **ডকুমেন্ট অবজেক্ট মডেল (DOM) তৈরি করা**: ব্রাউজারটি একটি ওয়েব পৃষ্ঠার HTML বিষয়বস্তু রেন্ডার করার সাথে সাথে এটি পৃষ্ঠার কাঠামোর একটি শ্রেণিবদ্ধ উপস্থাপনা তৈরি করে যাকে ডকুমেন্ট অবজেক্ট মডেল (DOM) বলা হয়। JavaScript এই DOM-এর সাথে ইন্টারঅ্যাক্ট করতে পারে এবং ম্যানিপুলেট করতে পারে, ওয়েবপৃষ্ঠার বিষয়বস্তু এবং কাঠামোতে গতিশীল পরিবর্তনগুলি সক্ষম করে৷
    iv. **ইভেন্ট-চালিত প্রোগ্রামিং**: জাভাস্ক্রিপ্ট ইভেন্ট-চালিত, যার অর্থ এটি ব্যবহারকারীর ক্রিয়াকলাপ (যেমন, ক্লিক, কী প্রেস) বা অন্যান্য ইন্টারঅ্যাকশন (যেমন, পৃষ্ঠা লোড, ডেটা আপডেট) দ্বারা ট্রিগার হওয়া ইভেন্টগুলিতে প্রতিক্রিয়া জানাতে পারে। ইভেন্ট শ্রোতারা জাভাস্ক্রিপ্ট কোডে নির্দিষ্ট ইভেন্টগুলির জন্য "শুনতে" সেট আপ করা হয় এবং সেই ঘটনাগুলি ঘটলে পূর্বনির্ধারিত ক্রিয়া সম্পাদন করে।
    v. **ভেরিয়েবল এবং ডেটা টাইপ**: জাভাস্ক্রিপ্ট ডেভেলপারদের ডেটা সঞ্চয় ও পরিচালনার জন্য ভেরিয়েবল ঘোষণা করতে দেয়। এটি স্ট্রিং, সংখ্যা, বুলিয়ান, অ্যারে এবং অবজেক্ট সহ বিভিন্ন ধরনের ডেটা সমর্থন করে। ভেরিয়েবলগুলিকে মান নির্ধারণ করা যেতে পারে এবং কোডের মধ্যে ম্যানিপুলেট করা যেতে পারে।
    vi. **কন্ট্রোল ফ্লো**: জাভাস্ক্রিপ্ট কন্ডিশনাল স্টেটমেন্ট (যদি, অন্য) এবং লুপ (এর জন্য, সময়) এর মতো কন্ট্রোল স্ট্রাকচার সমর্থন করে যা কোড এক্সিকিউশনের প্রবাহ নিয়ন্ত্রণ করে। এই কাঠামোগুলি বিকাশকারীদের শর্তগুলির উপর ভিত্তি করে সিদ্ধান্ত নিতে এবং পুনরাবৃত্তি করতে সক্ষম করে।
    vii. **ফাংশন**: জাভাস্ক্রিপ্টের ফাংশন হল কোডের ব্লক যা সংজ্ঞায়িত করা যায় এবং পুনরায় ব্যবহার করা যায়। তারা নির্দিষ্ট যুক্তিকে এনক্যাপসুলেট করে এবং আর্গুমেন্ট এবং রিটার্ন মান গ্রহণ করতে পারে। ফাংশন কোড মডুলারিটি এবং পুনরায় ব্যবহারযোগ্যতা প্রচার করে।
    viii. **অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং**: জাভাস্ক্রিপ্ট অ্যাসিঙ্ক্রোনাস ক্রিয়াকলাপগুলিকে সক্ষম করে, যা কোডকে মূল এক্সিকিউশন থ্রেড ব্লক না করে একযোগে চালানোর অনুমতি দেয়। পুরো পৃষ্ঠাটি হিমায়িত না করে নেটওয়ার্ক অনুরোধ করা বা সময়সাপেক্ষ ক্রিয়াকলাপ পরিচালনা করার মতো কাজের জন্য এটি অত্যন্ত গুরুত্বপূর্ণ।
    ix. **বাহ্যিক সম্পদ এবং APIs**: JavaScript সার্ভার থেকে ডেটা আনতে, কন্টেন্টকে গতিশীলভাবে আপডেট করতে এবং তৃতীয় পক্ষের পরিষেবাগুলির সাথে একীভূত করতে API-এর মতো বাহ্যিক সংস্থানগুলির সাথে যোগাযোগ করতে পারে। এটি ডেটা-চালিত অ্যাপ্লিকেশন তৈরি করা এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করা সম্ভব করে তোলে।
    x. **ডিবাগিং এবং ডেভেলপমেন্ট টুলস**: ব্রাউজারগুলি ডেভেলপার টুল সরবরাহ করে যা ডিবাগিং, ভেরিয়েবল পরিদর্শন, নেটওয়ার্ক অনুরোধগুলি পর্যবেক্ষণ এবং কর্মক্ষমতা বিশ্লেষণের মতো বৈশিষ্ট্যগুলি অফার করে৷ এই টুলগুলি ডেভেলপারদের তাদের জাভাস্ক্রিপ্ট কোডে সমস্যা চিহ্নিত করতে এবং সমাধান করতে সাহায্য করে।

    সংক্ষেপে, জাভাস্ক্রিপ্ট HTML নথিতে এম্বেড করা, ব্রাউজারের জাভাস্ক্রিপ্ট ইঞ্জিন দ্বারা ব্যাখ্যা করা এবং DOM এবং অন্যান্য ব্রাউজার বৈশিষ্ট্যগুলির সাথে ইন্টারঅ্যাক্ট করে কাজ করে। এটি গতিশীল বিষয়বস্তু, রিয়েল-টাইম মিথস্ক্রিয়া এবং ওয়েব পৃষ্ঠাগুলিতে উন্নত ব্যবহারকারীর অভিজ্ঞতা সক্ষম করে।
 *
 * 3. একটি ভেরিয়েবল হল প্রোগ্রামিং এর একটি মৌলিক ধারণা যা ডেটা ধারণ করার জন্য মেমরিতে স্টোরেজ অবস্থানের প্রতিনিধিত্ব করে। এটি একটি নামযুক্ত স্থানধারক যা বিভিন্ন ধরণের মান যেমন সংখ্যা, স্ট্রিং, বুলিয়ান, বস্তু এবং আরও অনেক কিছু সংরক্ষণ করতে পারে। ভেরিয়েবলগুলি ডেটা সঞ্চয় এবং পরিচালনার জন্য অপরিহার্য যা একটি প্রোগ্রাম গণনা, ম্যানিপুলেশন এবং অন্যান্য ক্রিয়াকলাপের জন্য ব্যবহার করে।

    জাভাস্ক্রিপ্ট সহ বেশিরভাগ প্রোগ্রামিং ভাষায়, ভেরিয়েবলের নিম্নলিখিত বৈশিষ্ট্য রয়েছে:

    i **নাম**: একটি ভেরিয়েবলকে একটি নাম দ্বারা চিহ্নিত করা হয়, যা তার মান অ্যাক্সেস এবং ম্যানিপুলেট করতে ব্যবহৃত হয়। পরিবর্তনশীল নামগুলি সাধারণত বর্ণনামূলক এবং অর্থপূর্ণ হতে বেছে নেওয়া হয়, যা তাদের ধারণ করা ডেটার উদ্দেশ্য বা বিষয়বস্তুকে প্রতিফলিত করে।
    ii. **মান**: একটি ভেরিয়েবলের মান হল এটি বর্তমানে ধারণ করা ডেটা। এই মান একটি প্রোগ্রামের সঞ্চালনের সময় পরিবর্তন বা আপডেট করা যেতে পারে.
    iii. **ডেটা টাইপ**: ভেরিয়েবলের একটি ডাটা টাইপ থাকে যা নির্ধারণ করে যে তারা কি ধরনের ডেটা সঞ্চয় করতে পারে। সাধারণ ডেটা প্রকারের মধ্যে রয়েছে সংখ্যা, স্ট্রিং, বুলিয়ান, অ্যারে, অবজেক্ট এবং আরও অনেক কিছু। ডেটা টাইপ ভেরিয়েবলের উপর সঞ্চালিত ক্রিয়াকলাপগুলিকে প্রভাবিত করে এবং কীভাবে সংরক্ষিত ডেটা চিকিত্সা করা হয়।
    iv **স্কোপ**: ভেরিয়েবলের একটি সুযোগ রয়েছে যা সংজ্ঞায়িত করে যে সেগুলি কোথায় অ্যাক্সেস এবং পরিবর্তন করা যেতে পারে। ভেরিয়েবলের গ্লোবাল স্কোপ (সম্পূর্ণ প্রোগ্রাম জুড়ে অ্যাক্সেসযোগ্য) বা স্থানীয় সুযোগ (কোড বা ফাংশনের একটি নির্দিষ্ট ব্লকের মধ্যে সীমাবদ্ধ) থাকতে পারে।
    v. **অ্যাসাইনমেন্ট**: একটি ভেরিয়েবলকে একটি মান দিতে, আপনি একটি অ্যাসাইনমেন্ট স্টেটমেন্ট ব্যবহার করেন। এর মধ্যে একটি অ্যাসাইনমেন্ট অপারেটর (`=`) এবং আপনি যে মানটি সঞ্চয় করতে চান তার পরে ভেরিয়েবলের নাম উল্লেখ করা জড়িত।

    ভেরিয়েবলগুলি প্রোগ্রামগুলিতে ডেটা সংরক্ষণ এবং পরিচালনার জন্য অত্যন্ত গুরুত্বপূর্ণ, বিকাশকারীদের তাদের কোড কার্যকর করার সময় গতিশীল এবং পরিবর্তনশীল তথ্যের সাথে কাজ করতে সক্ষম করে।
 * 
 * 6. প্রোগ্রামিং-এ, ডেটা টাইপগুলিকে বিস্তৃতভাবে দুটি প্রধান গ্রুপে শ্রেণীবদ্ধ করা যেতে পারে: আদিম ডেটা টাইপ এবং নন-প্রিমিটিভ (রেফারেন্স হিসাবেও পরিচিত) ডেটা টাইপ। আসুন এই বিভাগগুলির প্রতিটি অন্বেষণ করি:

    **প্রিমিটিভ ডেটা টাইপস**:
    আদিম ডেটা প্রকারগুলি হল মৌলিক ধরণের ডেটা যা একক মানগুলিকে উপস্থাপন করে। এগুলি অপরিবর্তনীয়, যার অর্থ তাদের তৈরি হওয়ার পরে তাদের মান পরিবর্তন করা যায় না। বেশিরভাগ প্রোগ্রামিং ভাষায়, আদিম ডেটা টাইপগুলি সরাসরি ম্যানিপুলেট করা হয় এবং মেমরিতে সংরক্ষণ করা হয়। এখানে কিছু সাধারণ আদিম ডেটা প্রকার রয়েছে:

    1. **সংখ্যা**: পূর্ণসংখ্যা এবং ভাসমান-বিন্দু সংখ্যা সহ সাংখ্যিক মানগুলিকে প্রতিনিধিত্ব করে। উদাহরণ: `5`, `3.14`।
    2. **স্ট্রিং**: অক্ষরের ক্রম (টেক্সট) প্রতিনিধিত্ব করে। উদাহরণ: `"হ্যালো, ওয়ার্ল্ড!"`, `'জাভাস্ক্রিপ্ট'`।
    3. **বুলিয়ান**: বাইনারি মান প্রতিনিধিত্ব করে, হয় `সত্য` বা `মিথ্যা`। উদাহরণ: `সত্য`, `মিথ্যা`।
    4. **অনির্ধারিত**: একটি মানের অনুপস্থিতির প্রতিনিধিত্ব করে। যে ভেরিয়েবলগুলি ঘোষণা করা হয়েছে কিন্তু একটি মান বরাদ্দ করা হয়নি সেগুলি স্বয়ংক্রিয়ভাবে `অনির্ধারিত` তে আরম্ভ করা হয়।
    5. **নাল**: কোনো মান বা বস্তুর ইচ্ছাকৃত অনুপস্থিতির প্রতিনিধিত্ব করে।
    6. **প্রতীক** (কিছু প্রোগ্রামিং ভাষায়): একটি অনন্য এবং অপরিবর্তনীয় মান উপস্থাপন করে, প্রায়ই অবজেক্ট প্রপার্টি কী হিসাবে ব্যবহৃত হয়।

    **নন-প্রিমিটিভ (রেফারেন্স) ডেটা টাইপস**:
    নন-প্রিমিটিভ ডেটা প্রকারগুলি আরও জটিল এবং মান, ফাংশন এবং বস্তুর সংগ্রহ ধারণ করতে পারে। তাদের "রেফারেন্স" ডেটা টাইপ বলা হয় কারণ তারা মেমরিতে সঞ্চিত প্রকৃত ডেটাতে রেফারেন্স (মেমরি ঠিকানা) সঞ্চয় করে। নন-প্রিমিটিভ ডেটা টাইপ ম্যানিপুলেট করার ক্ষেত্রে প্রায়ই প্রকৃত মানের পরিবর্তে রেফারেন্স ম্যানিপুলেট করা হয়। এখানে কিছু সাধারণ অ-আদিমিক ডেটা প্রকার রয়েছে:

    1. **অবজেক্ট**: কী-মানের জোড়ার একটি সংগ্রহের প্রতিনিধিত্ব করে, যেখানে প্রতিটি মান যেকোনো ডেটা টাইপের হতে পারে। বস্তু বিভিন্ন বৈশিষ্ট্য এবং পদ্ধতি ধারণ করতে পারে।
    2. **অ্যারে**: মানগুলির একটি অর্ডারকৃত সংগ্রহের প্রতিনিধিত্ব করে, যা বিভিন্ন ধরনের হতে পারে। অ্যারে হল এক ধরনের বস্তু যার সংখ্যাসূচক সূচী রয়েছে।
    3. **ফাংশন**: কোডের একটি পুনঃব্যবহারযোগ্য ব্লকের প্রতিনিধিত্ব করে যা একটি নির্দিষ্ট কাজ সম্পাদন করে।
    4. **তারিখ**: তারিখ এবং সময় প্রতিনিধিত্ব করে।
    5. **RegExp (রেগুলার এক্সপ্রেশন)**: স্ট্রিং এর মধ্যে প্যাটার্ন ম্যাচিং এর জন্য ব্যবহৃত একটি প্যাটার্নের প্রতিনিধিত্ব করে।
    6. **কাস্টম অবজেক্ট**: যে অবজেক্টগুলিকে প্রোগ্রামাররা তাদের অ্যাপ্লিকেশনের জন্য নির্দিষ্ট আরও জটিল ডেটা স্ট্রাকচারের মডেল করতে সংজ্ঞায়িত করে।

    এটা মনে রাখা গুরুত্বপূর্ণ যে নন-প্রিমিটিভ ডেটা টাইপগুলি প্রায়শই রেফারেন্স দ্বারা তুলনা করা হয়, মান দ্বারা নয়। এর মানে হল যে একই অ-আদি মানের দুটি রেফারেন্স একই মেমরি অবস্থান নির্দেশ করবে। একটি রেফারেন্সের মাধ্যমে করা পরিবর্তনগুলি অন্য রেফারেন্সের মাধ্যমে দেখা মানকে প্রভাবিত করবে।

    সংক্ষেপে, আদিম ডেটা টাইপগুলি মৌলিক মানগুলিকে উপস্থাপন করে এবং সরাসরি সংরক্ষণ করা হয়, যখন অ-আদি ডেটা টাইপগুলি আরও জটিল এবং মেমরিতে অন্য কোথাও সঞ্চিত প্রকৃত ডেটার রেফারেন্স সংরক্ষণ করে। কার্যকর প্রোগ্রামিং এবং মেমরি ব্যবস্থাপনার জন্য এই পার্থক্যগুলি বোঝা অপরিহার্য।
 * 
 * 7. জাভাস্ক্রিপ্টে ভেরিয়েবলের নামকরণ করার সময়, কোড পঠনযোগ্যতা, রক্ষণাবেক্ষণযোগ্যতা এবং সামঞ্জস্য নিশ্চিত করতে নির্দিষ্ট নামকরণের নিয়ম অনুসরণ করা গুরুত্বপূর্ণ। এখানে জাভাস্ক্রিপ্ট ভেরিয়েবলের জন্য কিছু সাধারণ নামকরণের নিয়ম রয়েছে:

    1. **ক্যামেল কেস**: জাভাস্ক্রিপ্টে, ভেরিয়েবলের নামকরণের জন্য সবচেয়ে সাধারণ নিয়ম হল ক্যামেল কেস। উটের ক্ষেত্রে যৌগিক শব্দ বা বাক্যাংশ লেখা জড়িত যেখানে প্রতিটি শব্দ (প্রথমটি বাদে) একটি বড় অক্ষর দিয়ে শুরু হয় এবং কোনও স্পেস বা বিশেষ অক্ষর নেই।
    উদাহরণ: `firstName`, `numOfItems`, `totalAmount`

    2. **অর্থপূর্ণ নাম**: পরিবর্তনশীল নাম নির্বাচন করুন যা বর্ণনামূলক এবং ভেরিয়েবলের ডেটা বা উদ্দেশ্য সম্পর্কে স্পষ্ট অর্থ প্রদান করে। একক-অক্ষরের নাম বা অত্যধিক সংক্ষিপ্ত নাম ব্যবহার করা এড়িয়ে চলুন যা বোঝা কঠিন।
    3. **আলফানিউমেরিক অক্ষর ব্যবহার করুন**: পরিবর্তনশীল নামের অক্ষর (ছোট হাতের এবং বড় হাতের উভয়), সংখ্যা এবং আন্ডারস্কোর (`_`) অন্তর্ভুক্ত থাকতে পারে। পরিবর্তনশীল নামের বিশেষ অক্ষর, স্পেস বা হাইফেন ব্যবহার করা এড়িয়ে চলুন।
    4. **একটি অক্ষর দিয়ে শুরু করুন**: পরিবর্তনশীল নাম অবশ্যই একটি অক্ষর (বড় হাতের বা ছোট হাতের) বা একটি আন্ডারস্কোর দিয়ে শুরু করতে হবে। তারা একটি সংখ্যা বা অন্য কোন অক্ষর দিয়ে শুরু করতে পারে না।
    5. **কোনও সংরক্ষিত শব্দ নেই**: পরিবর্তনশীল নাম হিসেবে সংরক্ষিত কীওয়ার্ড (যেমন `var`, `let`, `if`, `for`, ইত্যাদি ব্যবহার করা এড়িয়ে চলুন।
    6. **সঙ্গতি**: আপনার কোডবেস জুড়ে সামঞ্জস্যপূর্ণ নামকরণ বজায় রাখুন। আপনি যদি একটি নির্দিষ্ট নামকরণের রীতি বেছে নেন, তাহলে সমস্ত ভেরিয়েবল জুড়ে এটিকে আটকে রাখুন।
    7. **বিল্ট-ইন অবজেক্টের জন্য ছোট হাতের অক্ষর ব্যবহার করুন**: জাভাস্ক্রিপ্টে বিল্ট-ইন অবজেক্ট এবং ফাংশন রয়েছে (যেমন, `অ্যারে`, `ম্যাথ`, `স্ট্রিং`)। কাস্টম ভেরিয়েবলের সাথে বিভ্রান্তি এড়াতে এই বস্তুগুলির জন্য ছোট হাতের অক্ষর ব্যবহার করার পরামর্শ দেওয়া হয়।
    8. **বড় হাতের ধ্রুবক**: আপনি যদি ধ্রুবক ঘোষণা করেন, যেগুলি মান সহ ভেরিয়েবল যা পরিবর্তন করা উচিত নয়, শব্দগুলিকে আলাদা করতে বড় হাতের অক্ষর এবং আন্ডারস্কোর ব্যবহার করুন।
    উদাহরণ: `const MAX_LENGTH = 100;`

    9. **পসকেলের ক্ষেত্রে কনস্ট্রাক্টর ফাংশন**: আপনি যদি কনস্ট্রাক্টর ফাংশন ('নতুন' কীওয়ার্ডের সাথে ব্যবহার করার উদ্দেশ্যে ফাংশন) সংজ্ঞায়িত করেন তবে প্যাসকেস কেস ব্যবহার করুন। এতে প্রথমটি সহ প্রতিটি শব্দের প্রথম অক্ষর বড় করা জড়িত।
    উদাহরণ: `ফাংশন কার(মেক, মডেল) { ... }`

    এই নিয়মগুলি অনুসরণ করে ভাল পরিবর্তনশীল নামের কিছু উদাহরণ এখানে দেওয়া হল:

    let firstName = "এলিস";
    যাক numOfItems = 10;
    যাক মোট পরিমাণ = 200.50;

    const MAX_LENGTH = 100;

    ফাংশন calculateTotal(মূল্য, পরিমাণ) {
        রিটার্ন মূল্য * পরিমাণ;
    }

    এই নামকরণের নিয়মগুলি অনুসরণ করে, আপনি এমন কোড তৈরি করবেন যা আরও পঠনযোগ্য, সহজে বোঝার এবং আরও রক্ষণাবেক্ষণযোগ্য, আপনার জন্য এবং আপনার কোডের সাথে কাজ করতে পারে এমন অন্যান্য বিকাশকারীদের জন্য।

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
    
*/
