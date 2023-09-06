// Practice-1
function hourToMinute(hour) {
    const minutes = hour * 60;
    return minutes;
}

// console.log(hourToMinute(4))

// Practice-2
function findLeapYear(years) {
    const leapYear = [];
    for(let i = 0; i < years.length; i++) {
        if(years[i] % 4 === 0){
            leapYear.push(years[i])
        }
    }
    return leapYear;
}
const years = [2023, 2024, 2025, 2028, 2030];

// console.log(findLeapYear(years));

// Practice-3
function findOddSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}
const numbers = [5,7,8,10,45, 30];

// console.log(findOddSum(numbers))
