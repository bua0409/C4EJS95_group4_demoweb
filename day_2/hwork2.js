//Question 1
/*
1.What are var and const in JavaScript?
-"var" and "const" are variable declaration.

2.What are the differences between let and var?
The difference between them is there scope, both var and let variable declaration can still reassigned.
-var can have global or local scope but not block scope.
-var let user declares a variable multiple times.
-let can have block or local scope but not global scope.
-let let user update the data of the variable but not redeclare it.

3.What are the differences between let and const?
The difference between them are assignability.
-varibles declared using const cannot be reassign.
-varibles declared using let can be reassign.

4.What to use in what cases?
-Var: become obsolete after ES6 update that introduce let, not recommended.
-Let: use when you want to change the variables's value.
-Const: use when you know that the value of the variables are unchanged
đổi.
*/

//Question 2
/*
1.What is Boolean?
-Boolean is a logical data type that has 2 possible values: true & false.

2.What results in Boolean?
-Boolean has 2 possible results: true or false.
*/

//Question 3: Write a program to print out
//a.7 numbers, starting from 0 (no user input)
// for (let i = 0; i < 7; i++) {
//   console.log(i);
// }

// //b.n numbers, starting from 0, n entered by user
// const inputNum = prompt("Enter a number?")-0; //convert to number
// for (let i = 0; i < inputNum; i++) {
//   console.log(i);
// }

//c.A sequence of numbers, starting from 3, ending before n, n entered by user
// const inputNum = prompt("Enter n")-0; //convert to number
// for (let i = 3; i < inputNum; i++) {
//   console.log(i);
// }

//d.A sequence of numbers, starting from c, ending before n, c and n entered by user
// const inputEnd = prompt("Enter n")-0; //convert to number
// let inputStart = prompt("Enter c")-0; //convert to number
// for (let i = inputStart; i < inputEnd; i++) {
//   console.log(i);
// }

//e.A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// const inputEnd = prompt("Enter n")-0; //convert to number
// let inputStart = prompt("Enter c")-0; //convert to number
// for (let i = inputStart; i < inputEnd; i += 3) {
//   console.log(i);
// }

//f.A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user
// const inputEnd = prompt("Enter n")-0; //convert to number
// let inputStart = prompt("Enter c")-0; //convert to number
// const increment = prompt("Enter s") - 0; //convert to number
// for (let i = inputStart; i < inputEnd;i += increment) {
//   console.log(i);
// }

//Question 4: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// const inputNum = prompt("Enter a number")-0;
// let factorial = 1;
// for (let i = 1; i <= inputNum; i++) {
//   factorial *= i;
// }
// alert(`The factorial of ${inputNum} is ${factorial}`);

//Question 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// const inputAge = prompt("How old are you?")-0;
// if (inputAge >= 14) {
//   alert("Enjoy!");
// } else {
//   alert("You are not old enough to view this content");
// }

//Question 6: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// let inputNum = prompt("Enter a number") - 0;
// while (inputNum < 0 || inputNum > 9) {
//   inputNum = prompt("Enter a number in range 0-9");
// }
// if (inputNum >= 0 && inputNum < 4.5) {
//   alert("Lower half of 9");
// } else if (inputNum > 4.5 && inputNum <= 9) {
//   alert("Higher half of 9");
// }

//Question 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// const inputNum = prompt("n =") - 0;
// const numCheck = prompt("x =") - 0;
// if (numCheck > inputNum / 2) {
//   alert(`${numCheck} is in higher half of ${inputNum}`);
// } else if (numCheck < inputNum / 2) {
//   alert(`${numCheck} is in lower half of ${inputNum}`);
// } else {
//   alert(`${numCheck} is half of ${inputNum}`);
// }

//Question 8: Write a script to check if a number is even (divisible by 2) or odd number
// const inputNum = prompt("x =") - 0;
// if (inputNum % 2 === 0) {
//   alert(`${inputNum} is an even number`);
// } else {
//   alert(`${inputNum} is an odd number`);
// }

//Question 9: Write a program to print out
//a.6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for (let i = 0; i < 3; i++) {
//   console.log("L");
// }
// for (let j = 3; j < 6; j++) {
//   console.log("H");
// }

//b.n L’s and H’s in total, n entered by user
// const inputNum = prompt("Enter the total number of L's and H's") - 0;
// for (let i = 0; i < inputNum / 2; i++) {
//   console.log("L");
// }
// for (let j = inputNum / 2; j < inputNum - 0.5; j++) {
//   console.log("H");
// }

//c.8 1’s and 0’s in total, consecutively
// for (let i = 0; i < 8; i++) {
//   if (i % 2 === 0) {
//     console.log("0");
//   } else {
//     console.log("1");
//   }
// }

//d.n 1’s and 0’s in total, consecutively, n entered by user
// const inputNum = prompt("Enter the total number of 1's and 0's");
// for (let i = 0; i < inputNum; i++) {
//   if (i % 2 === 0) {
//     console.log("0");
//   } else {
//     console.log("1");
//   }
// }

//Question 10: Write a script to calculate the BMI (Body Mass Index) of a person
const yourWeight = prompt("Your weight in kg");
const yourHeight = prompt("Your height in cm") / 100;
const BMI = (yourWeight / yourHeight ** 2).toFixed(2);
alert(`Your BMI is ${BMI}`);
if (BMI < 16) {
  alert("You are severely underweight");
} else if (BMI >= 16 && BMI < 18.5) {
  alert("You are underweight");
} else if (BMI >= 18.5 && BMI < 25) {
  alert("You are normal");
} else if (BMI >= 25 && BMI < 30) {
  alert("You are overweight");
} else {
  alert("You are obese");
}
