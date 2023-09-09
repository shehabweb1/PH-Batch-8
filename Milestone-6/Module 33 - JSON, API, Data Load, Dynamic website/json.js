const student = {
    name: "Shehab",
    department: "Computer Science",
    roll: 19,
    isRegular: true,
    result: 3.25
}

const studentJson = JSON.stringify(student);
console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);

/*
 * JSON have two methods
 * 1. JSON.stringify()
 * 2. JSON.parse()
*/
