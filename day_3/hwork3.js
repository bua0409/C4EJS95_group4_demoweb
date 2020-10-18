//Question 1: Variable swap
/** Way 1: Using destructuring assignment
 *  let num1 = 1;
 *  let num2 = 2;
 *
 *  [a,b] = [b,a]
 *
 * Way 2: Using temporary variable
 *  let num1 = 1;
 *  let num2 = 2;
 *
 * temp = a;
 * a = b;
 * b = temp;
 */

//Question 2: Split String into Array using type conversion from String to Array
/**    const s = ‘Hello beauty there’;
 *     a = s.split(" ");
 *     console.log(a); // Result: [“Hello”, “beauty”, “there”]
 */

//Question 3:
// const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...testCase);

// Question 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users
const userOpt = prompt(
  "Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?"
).toLowerCase();
let currentItems = ["Jeans", "T-shirts", "Socks"];

function printCurrentItems() {
  console.log("The current items are:");
  for (let i = 0; i < currentItems.length; i++) {
    console.log(`${i + 1}\. ${currentItems[i]}`);
  }
}

switch (userOpt) {
  case "c":
    currentItems.push(prompt("Enter the name of the new item"));
    alert("Done");
    printCurrentItems();
    break;
  case "r":
    printCurrentItems();
    break;
  case "u":
    const updatePos = prompt("Enter the position you want to update");
    currentItems[updatePos - 1] = prompt("Enter the new name");
    alert("Done");
    printCurrentItems();
    break;
  case "d":
    const deletePos = prompt("Enter the position you want to delete");
    currentItems.splice(deletePos - 1, 1);
    alert("Done");
    printCurrentItems();
    break;
}

//Question 5: Write a script to ask users enter a sequence of numbers,
//the Numbers are separated by commas, calculate the sum of the numbers and show it to users
const inputNums = prompt(
  "Enter a squence of Numbers, seperated by commas (,)"
).split(",");
let sum = 0;

for (let i = 0; i < inputNums.length; i++) {
  sum += Number(inputNums[i]);
}

alert(`The sum of them is ${sum}`);

//Question 6: Write a script asking users to enter a sequence of numbers,
//the numbers are separated by commas, find the smallest number and log it out to users
let inputNums = prompt(
  "Enter a squence of Numbers, seperated by commas (,)"
).split(",");

let minNum = Math.min(...inputNums);

alert(`The smallest number is ${minNum}`);

//Question 7: Create an array containing at least 5 numbers, then ask users enter a number,
// perform a search to look for the number in the array, if the number is found, tell user
//that with the index of it in the array, if not, also tell them so
const arr = [3, 4, 6, -9, 10, -88, 2];
const searchNum = prompt("Enter a number") - 0;

if (!arr.includes(searchNum)) {
  alert(`${searchNum} is NOT found in my array`);
} else {
  alert(`${searchNum} is FOUND in my array at index ${arr.indexOf(searchNum)}`);
}

//Question 8:
//8.1. Create an array to represent the sizes of your flock, and log all of your flock size:
let myArr = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Son and here is my sheep sizes:");
console.log(...myArr);

//8.2.Add scripts to search for the biggest sheep in your list
console.log(
  `Now my biggest sheep has size ${Math.max(...myArr)}, let's shave it`
);

//8.3.When your biggest sheer, its size will return to the default size, which is 8.
myArr[myArr.indexOf(Math.max(...myArr))] = 8; //return to default size
console.log("After shearing, here is my flock");
console.log(...myArr);

//8.4 & 8.5.In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
for (let i = 0; i < 4; i++) {
  console.log(`MONTH ${i + 1}`);
  console.log(
    "One month has passed, my sheeps have grown, here are their sizes"
  );
  for (let j = 0; j < myArr.length; j++) {
    myArr[j] += 50;
  }
  console.log(...myArr);
  if (i < 3) {
    //Only shave the biggest sheep before the last month
    console.log(
      `Now my biggest sheep has size ${Math.max(...myArr)}, let's shave it`
    );
    myArr[myArr.indexOf(Math.max(...myArr))] = 8; //return to default size
    console.log("After shearing, here is my flock");
    console.log(...myArr);
  }
}

//8.6.Write a program to calculate the total size of your sheep as well as the money you would have
let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  sum += myArr[i];
}
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${sum * 2}`);

//Question 9:
const colors = ["red", "gray", "blue", "purple", "cyan"];
clear();
let decrease = 0;
for (let i = 4; i >= 0; i--) {
  for (let j = 0; j < 4; j++) {
    color(colors[i]);
    fd(200 - decrease);
    rt(90);
  }
  decrease += 30;
}

//Question 10:
const namesArr = prompt("Enter a sequence of names").split(",");
let newNamesArr = [];

for (let i = 0; i < namesArr.length; i++) {
  newNamesArr[i] = "<" + namesArr[i] + ">";
}
alert(`${namesArr} => ${newNamesArr}`);

//Question 11:
const numbersArr = prompt("Enter a sequence of numbers").split(",");
let oddNumbersArr = [];
let j = 0;

//Solution 1: Move the odd numbers to a new array
for (let i = 0; i < numbersArr.length; i++) {
  if (parseInt(numbersArr[i]) % 2 !== 0) {
    oddNumbersArr[j] = parseInt(numbersArr[i]);
    j++;
  }
}
alert(`${numbersArr} => ${oddNumbersArr}`);
//Solution 2: Use filter to extract the odd numbers
//let oddNumbersArr = numbersArr.filter(x => x % 2 !== 0); (Solution from NVQ)

//Question 13:(from session 2):
const NUMBERS_POLYGONS = prompt("How many polygons");
clear();
for (let i = parseInt(NUMBERS_POLYGONS); i > 2; i--) {
  for (let j = 0; j < i; j++) {
    fd(100);
    rt(360 / i);
  }
}
