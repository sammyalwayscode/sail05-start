// // // console.log(200);

// // let myAge = 34;
// // myAge = 65;

// // console.log(myAge);

// // const yourAge = 67;

// // // yourAge = 45;
// // console.log(yourAge);

// // let age;

// // age = 45;
// // console.log(age);

// //Primitive data types

// // string '' ""

// let kezaya = "today is kezaya's birthday";

// // number

// let myNum = 63;

// //boolean
// const me = true;
// const you = false;

// //undefined
// let test;
// console.log(test);

// //null
// let test2 = null;

// test2 = 56;
// console.log(test2);

// // Non-primitive data types
// // objects

// const student = {
//   name: "kezaya",
//   age: 21,
//   isPregnant: true,
// };

// console.log(student);

// // arrays

// const myArray = ["Amaka", "James", 354, true, { name: "John" }, [2, 4, 6]];
// console.log(myArray[2]);

// // functions

//Arithemetic Operator

// let a = 34;
// let b = 56;

// // Addition
// const sum = a + b;
// console.log(sum);

// //Subtraction
// const subb = a - b;
// console.log(subb);

// //Division
// const div = b / a;
// console.log(div);

// //Mutiply
// const mut = a * b;
// console.log(mut);

// //Modulus
// const modul = b % a;
// console.log(modul);

// //Assignment Operators
// let c = 39
// // +=
// // -=

//Comparism Operators
// const d = "jane";
// const e = "jane";
// const f = "mary";
// const g = 23;
// const h = 47;
// const i = 23;
// const j = "23";

//Equals To
// console.log(d == e);
// //Grater Than
// console.log(g > h);
// //Less Than
// console.log(g < h);
// //Greater than equals to
// console.log(g >= i);
// //Less than equals to
// console.log(g <= i);
// //Not Equals To
// console.log(g != i);
//Strictly Equals To
// console.log(i === j);
// console.log(i);
// console.log(j);

//Logical Operator
// Logical OR ||
// Logical NOT !
// Logiacl AND &

// //Ayo's Admission Details
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || !textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idCard) || (fee && uniform);
// console.log(checkAyoAgain);
// console.log("from idcard", !idCard);

// //Unary Operator
// // Increment ++
// // Decrement --

// let k = 3;
// k++;
// console.log(k);
// k--;
// console.log(k);

// //Tenary Operator
// // (contition) ? "" : ""

// const tenTest = 76 > 45 ? "Yes This is correct" : "No, That is wrong";

// console.log(tenTest);

//Write a program that tells if a user is legible to vote

// let age = -65;

// let voting = age < 18 ? "You cannot vote" : "You can vote";
// console.log(voting);

// let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
// console.log(voting);

//Conditionals
// if statement
// if else statement
// if else if statement

// if(){}

// let a = 23;
// let b = 56;
// console.log(a > b);

// if condition
// if (a > b) {
//   console.log("The First Value is the greatest");
// }

//if else condition

// if(){}else{}
// if (45 > 67) {
//   console.log("45 is the highest number");
// } else {
//   console.log("67 is the highest number ");
// }

// if (a > b) {
//   console.log("The first Value is the greatest");
// } else {
//   console.log("The second value is the greatest");
// }

// let DBpass = "sam12345";
// let password = "sam12345";

// if (password === DBpass) {
//   console.log("Logged In successfully");
// } else {
//   console.log("Incorrect Password");
// }

// const a = 45;
// const b = 67;
// alert(a + b);
// const name = "John";
// const mystory = `${name} is a bad boy, ${name} fetches water and ${name} does not attend classes, ${name} techer flogs ${name} and ${name} smokes sometime`;

// alert(mystory);
// console.log(mystory);

// prompt();

// prompt("Enter your age");
// const myAge = prompt("Enter your age");
// console.log(myAge);
// alert(myAge);
// const test = 78;
// console.log(`Your lucky number is ${test}`);

// const username = prompt("Enter your name");
// alert(`Welcome ${username}`);

// const age = prompt("Enter your age");
// console.log(typeof age);

// const storeprompt = prompt("Enter youir name");
// console.log(storeprompt);

// const a = 23;
// console.log(a);
// console.log(typeof a);
// console.log(a.toString());

// const age = parseInt(prompt("Enter your age"));
// console.log(age);

// let valueOne = prompt("Enter your first Number");
// let valueTwo = prompt("Enter your second Number");
// let ans = valueOne + valueTwo;
// alert(ans);

// let two = "34";
// let test = parseInt(two);
// console.log(two);
// console.log(typeof two);
// console.log(test);
// console.log(typeof test);

// let valueOne = parseInt(prompt("Enter your first Number"));
// let valueTwo = parseInt(prompt("Enter your second Number"));
// let ans = valueOne + valueTwo;
// alert(ans);

// Exercise list
// Write a program that determines whether a given number is positive or negative.

// let number = -18;
// if (number > 0) {
//   console.log("This is a positive Number");
// } else {
//   console.log("This is a negative number");
// }

// let number = parseInt(prompt("Enter a Number"));
// if (number > 0) {
//   alert(`${number} is a positive number`);
// } else {
//   alert(`${number} is a negative number`);
// }

// const userNumber = parseInt(prompt("Enter a number"));

// if (userNumber > 0) {
//   alert(`${userNumber} is a Postive number`);
// } else if (userNumber === 0) {
//   alert(`${userNumber} is invalid`);
// } else if (isNaN(userNumber)) {
//   alert("This is not a number");
// } else {
//   alert(`${userNumber} is a negative number`);
// }

// Write a program that checks if a number is even or odd.

// const myNum = parseInt(prompt("Enter any number"));

// if (myNum % 2 === 0) {
//   alert(`${myNum} is an even number`);
// } else {
//   alert(`${myNum} is an odd number`);
// }

// Write a program to determine the greater of two numbers.

// const valueOne = parseInt(prompt("Enter your bfirst value"));
// const valuetwo = parseInt(prompt("Enter your second value"));

// if (valueOne > valuetwo) {
//   alert(`${valueOne} is grater than ${valuetwo}`);
// } else {
//   alert(`${valuetwo} is grater than ${valueOne}`);
// }

// Write a program that transforms a numerical grade to a letter grade (e.g grade 0-39 should display “F”, grade 40-44 should display “E”, grade 45-49 should display “D”, grade 50-59 should display “C”, grade 60-69 should display “B”, grade 70-100 should display “A”).

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// Write a program that determines if a year is a leap year.

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).
// Underweight (below 18.5), Healthy Weight (18.5 to 24.9), Overweight (25 to 29.9), and Obese (30 or greater)

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

//String Methods
// let myStr = "Hello, Javascript World!     ";
// let myName = "Olorunda Samuel";

// console.log(myStr);
// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("Javascript"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2, 8));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "Universe"));
// console.log(myStr.split(" "));
// console.log(myName.split(" ")[1]);
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("Hi"));
// console.log(myName + myStr);

//Number Methods
// let num = 42.678;
// let strNum = "89.56";

// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(2));
// console.log(parseInt(strNum));
// console.log(parseFloat(strNum));
// console.log(isNaN("trtr"));

//Math Method

// console.log(Math.PI);
// console.log(Math.round(41.673));
// console.log(Math.floor(42.9));
// console.log(Math.ceil(42.1));
// console.log(Math.max(12, 6, 7));
// console.log(Math.min(34, 5, 7));
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(144));

// console.log(Math.random());
// console.log(Math.random() * 10000);

// console.log(Math.floor(Math.random() * 100));

//Objects

// let student = {
//   name: "Shade",
//   age: 34,
//   email: "shad@gmail.com",
// };

// console.log(student);
// console.log(student.name);
// console.log(Object.keys(student));
// console.log(Object.values(student));

//Functions

// function myName(name) {
//   console.log(name);
// }

// myName("Samuel");
// myName("Esther");
// myName("Hassan");

// function addNum(a, b) {
//   console.log(a + b);
// }

// addNum(5, 9);
// addNum(34, 67);

// Write an arrow function that divides two numbers.

// Write a function that checks if a number is even or odd.
// const CheckEvenOrOdd = function (a) {
//   if (a % 2 === 0) {
//     alert(`${a} is an even number`);
//   } else if (a % 2 !== 0) {
//     alert(`${a} is an odd number`);
//   } else {
//     alert("Sorry there is an incorrect input somewhere");
//   }
// };
// a = parseInt(prompt("Enter your number"));
// CheckEvenOrOdd(a);

// Write a function that returns the largest of three numbers.
function largestOfThreeNumbers(a, b, c) {
  a = parseInt(prompt("Enter the first number"));
  b = parseInt(prompt("Enter the second number"));
  c = parseInt(prompt("Enter the third number"));
  if (a > b && a > c) {
    alert(a + "this is the highest number");
  } else if (b > a && b > c) {
    alert(b + "this is the highest number");
  } else if (c > a && c > b) {
    alert(c + "this is the highest number");
  } else {
    alert("All numbers are equal");
  }
}
largestOfThreeNumbers();




// Write a function that reverses a string.









// Write a function that returns the longest word in a sentence.
