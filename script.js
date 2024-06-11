// TASK 1: Declare Variables
let studentName;
let studentAge;
let studentGrade;
let studentAttendanceStatus;

// TASK 2: Assign Sample Values
studentName = "Alina Applebottom";
studentAge = 14;
studentGrade = "9th Grade";
studentAttendanceStatus = true; 

//TASK 3: Display Student Information 
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Grade:", studentGrade);
console.log("Attendance Status:", studentAttendanceStatus);

// JAVASCRIPT OPERATORS

// TASK 1: Declare Variables

let num1;
let num2;

// TASK 2: Sample Values
num1 = 5;
num2 = 10;

// Task 3: Perform arithmetic operations
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);


// Task 4: Explore assignment operators
num1 += 5;
num2 *= 2;
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);


// Task 5: Use Comparison Operators
console.log("Is num1 equal to num2?:", num1 === num2);
console.log("Is num1 greater than num2?:", num1 > num2);
console.log("Is num1 not equal to num2?:", num1 !==num2);


// Task 6: Apply logical operators
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
console.log("Are both numbers positive?:", isPositive);
console.log("Is at least one number even?:", isEven);