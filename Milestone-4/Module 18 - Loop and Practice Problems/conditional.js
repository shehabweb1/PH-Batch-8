/**
 * 1. Meaning of: >, <, >=, <=, ==, !=, ===, !==
 * Ans: Comparison Operators
    Comparison operators are used in logical statements to determine equality or difference between variables or values.

    Given that x = 5, the table below explains the comparison operators:

    ==	    equal to	x == 8	    false	
                        x == 5	    true	
                        x == "5"	true

    ===	    equal value and equal type	    x === 5	    true	
                                            x === "5"	false

    !=	    not equal	            x != 8	    true

    !==	    not equal value or not equal type	x !== 5	    false	
                                                x !== "5"	true	
                                                x !== 8	    true

    >	    greater than	    x > 8	false	

    <	    less than	        x < 8	true

    >=	greater than or equal to	x >= 8	    false	

    <=	less than or equal to	    x <= 8	    true
 * 
 * 
 * 2. Meaning of: &&, ||
 * Ans: Logical Operators
    Logical operators are used to determine the logic between variables or values.

    Given that x = 6 and y = 3, the table below explains the logical operators:

    &&	    and	    (x < 10 && y > 1)   is true	

    ||	    or	    (x == 5 || y == 5)  is false
 * 
 * 
 */

/**
 * Let's say you have x amount of money. if you have more than 80,000 then you will buy MacBook,
 * if more than 60,000 then you will buy gaming laptop,
 * if more than 40,000 then you will buy Lenovo Yoga,
 * if more than 20,000 then you will buy used laptop,
 * otherwise you will use the phone
*/
const x = 21000;

let showMsg; 

if (x >= 80000){
    showMsg = "Buy MacBook"
}else if (x >= 60000){
    showMsg = "Buy Gaming Laptop"
}else if (x >= 40000){
    showMsg = "Buy Lenovo Yoga"
}else if (x >= 20000){
    showMsg = "Buy used Laptop"
} else{
    showMsg = "Use mobile phone"
}

// console.log(showMsg)