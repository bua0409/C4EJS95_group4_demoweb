/*Question 1
1.
You will get SyntaxError when:
- The variable name start with number.
- The variable name contain special characters (include space itself), except for "_" and "$".
- Naming variable with reserved words like: break, charm, goto...
Examples: 1tap, $newVar, abstract,....

2.
Using "typeof" to check variable data types
Examples:
    let isEqual = true;
    typeof isEqual;

    >'boolean'
*/

/*Question 2
1-b, 2-a, 3-e, 4-d
*/

//Question 3
//a.
let message = "Coding is great";
console.log(message);
//b.
let studentCount = 0;
console.log(studentCount);

//Question 4
//a.
message = "Coding might not be easy, but still great";
console.log(message);
//b.
studentCount = 16;
console.log(studentCount);
//c.
message = message.toLowerCase();
console.log(message);
//d.
studentCount++;
console.log(studentCount);

//Question 5
alert("You look beautiful today");

//Question 6
let yourName = prompt("Hi there, your name please?");
alert(`Hi ${yourName}`);

//Question 7
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
alert(`Hi ${lastName} ${firstName}`);

//Question 8
let sideLength = prompt("Enter side length of the square");
alert(`The square area is ${sideLength * sideLength}`);

//Question 9
let circleRadius = prompt("Enter the radius of the circle");
alert(`The circle area is ${3.14 * Math.pow(circleRadius, 2)}`);

//Question 10
let temp = prompt("Enter the temparature in Celcius");
alert(`${temp} (C) = ${(temp * 9) / 5 + 32} (F)`);
