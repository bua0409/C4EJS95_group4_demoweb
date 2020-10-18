// //Part 1.1
// function randomNum() {
//   console.log(Math.random().toFixed(2));
// }
// randomNum();

// //Part 1.2
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const array = [2, 5, 6, 9, 10];
// function randomPick() {
//   console.log(array[randomInRange(0, array.length - 1)]);
// }
// randomPick();

//Part 1.3
// let manyQuizzes = [
//   {
//     question: "Name the year?",
//     choices: { a: 2017, b: 2018, c: 2019, d: 2020 },
//     rightChoice: "d",
//   },
//   {
//     question: "Highest number?",
//     choices: { a: 101012, b: 220, c: 111, d: 300 },
//     rightChoice: "a",
//   },
//   {
//     question: "Lowest",
//     choices: { a: 101012, b: 220, c: 111, d: 300 },
//     rightChoice: "c",
//   },
//   {
//     question: "Int number?",
//     choices: { a: 2.1, b: 220, c: 11.1, d: 39.3 },
//     rightChoice: "b",
//   },
// ];

// //Part 1.4 -> Part 1.7
// function validateInput(USER_ANSWER, RAND_INDEX, question, choices) {
//   const validate = ["a", "b", "c", "d"];
//   while (validate.indexOf(USER_ANSWER) < 0) {
//     USER_ANSWER = prompt(
//       `${question}\nA. ${choices.a}\nB. ${choices.b}\nC. ${choices.c}\nD. ${choices.d}`
//     ).toLowerCase();
//   }
// }
// function randomQuiz() {
//   let countPoint = 0;
//   for (let i = 0; i < 4; i++) {
//     const RAND_INDEX = randomInRange(0, manyQuizzes.length - 1);
//     console.log(RAND_INDEX);
//     const { question, choices } = manyQuizzes[RAND_INDEX];
//     let USER_ANSWER = prompt(
//       `${question}\nA. ${choices.a}\nB. ${choices.b}\nC. ${choices.c}\nD. ${choices.d}\n`
//     ).toLowerCase();
//     //user input validation
//     console.log(RAND_INDEX);
//     validateInput(USER_ANSWER, RAND_INDEX, question, choices);
//     if (USER_ANSWER === manyQuizzes[RAND_INDEX].rightChoice) {
//       alert("Bravo!!!");
//       countPoint++;
//     } else {
//       alert("Good luck next time");
//     }
//     if (manyQuizzes.length === 0) {
//       alert("We are out of questions :c");
//     }
//     manyQuizzes.splice(RAND_INDEX, 1);
//   }
//   alert(`Your point(s) are: ${countPoint}`);
//   if (manyQuizzes.length === 0) {
//     alert("We are out of questions :c");
//   }
// }
// randomQuiz();

//Part 2
//part 2.1:
const jobData =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
//Data is in the link
//part 2.2: Get all the job hits
console.log(jobData.hits);
//part 2.3: Get the first job hit
console.log(jobData.hits[0]);
//part 2.4: Get jobTitle of the first job
const { jobTitle } = jobData.hits[0];
console.log(`First job title:\n${jobTitle}`);
//part 2.5: Get the benefits of the first job hit
const { benefits } = jobData.hits[0];
console.log(benefits);
//part 2.6: Log out first job hit benefit values
console.log("First job hit benefits");
for (let i = 0; i < benefits.length; i++) {
  console.log(`- ${benefits[i].benefitValue}`);
}
//part 2.7: Log out jobTitle and benefitValue of all job hits
const hitsLength = jobData.hits.length;
for (let i = 0; i < hitsLength; i++) {
  const { jobTitle, benefits } = jobData.hits[i];
  console.log(jobTitle);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) {
    console.log(`- ${benefits[j].benefitValue}`);
  }
  console.log(
    "------------------------------------------------------------------------------"
  );
}
//part 2.8: Log out jobTitle, locations, skills, jobSalary of all job hits
const hitsLength = jobData.hits.length;
for (let i = 0; i < hitsLength; i++) {
  const { jobTitle, jobSalary, locations, benefits, skills } = jobData.hits[i];
  console.log(`Title: ${jobTitle}`);
  console.log(`Salary: ${jobSalary}`);
  console.log(`Locations:\n- ${locations}`);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) {
    console.log(`- ${benefits[j].benefitValue}`);
  }
  console.log("Skills");
  for (let j = 0; j < skills.length; j++) {
    console.log(`- ${skills[j]}`);
  }
  console.log(
    "------------------------------------------------------------------------------"
  );
}

//Part 3
//part 3.1
const listOfWords = [
  "to",
  "be",
  "that",
  "of",
  "elon",
  "to",
  "this",
  "now",
  "back",
  "cool",
  "hey",
  "love",
  "of",
  "life",
  "that",
  "rain",
  "summer",
  "color",
  "now",
  "of",
  "hat",
  "late",
  "sorry",
  "my",
  "team",
];
let wordsArr = [];
const arrayLength = listOfWords.length;
for (let i = 0; i < arrayLength; i++) {
  let wordCheck = listOfWords[i];
  if (!wordsArr[wordCheck]) {
    //check if the word is in wordsArr or not
    wordsArr[wordCheck] = 1; //if false then add the word and set count = 1
  } else {
    wordsArr[wordCheck]++; //if true then count it
  }
}
for (let word in wordsArr) {
  console.log(`${word}: ${wordsArr[word]}`);
}

//Part 3.2
console.log("-----------------------------------------------------------");
const inventory = [
  {
    name: "HP Envy 13aq",
    price: 21000,
    brand: "HP",
    quantity: 5,
  },
  {
    name: "Dell XPS 9370",
    price: 30000,
    brand: "Dell",
    quantity: 1,
  },
  {
    name: "Dell Inspiron 3567",
    price: 9300,
    brand: "Dell",
    quantity: 12,
  },
  {
    name: "Dell Latitude E5450",
    price: 8600,
    brand: "Dell",
    quantity: 2,
  },
  {
    name: "Asus Zenbook",
    brand: "Asus",
    price: 20000,
    quantity: 4,
  },
  {
    name: "HP Pavilion",
    brand: "HP",
    price: 14000,
    quantity: 7,
  },
];
let inventoryByBrand = {};
const length = inventory.length;
for (let i = 0; i < length; i++) {
  const { brand } = inventory[i],
    brandName = brand.toLowerCase();
  if (inventoryByBrand[brandName]) {
    inventoryByBrand[brandName].push(inventory[i]);
  } else {
    inventoryByBrand[brandName] = [inventory[i]];
  }
}
console.log(inventoryByBrand);
//part 3.3 -> 3.7
const input = prompt("Which brand?").toLowerCase();
let productsList = "",
  totalValue = 0;
for (let i = 0; i < inventoryByBrand[input].length; i++) {
  const { name, price, quantity } = inventoryByBrand[INPUT][i];
  productsList += `${name}\n`;
  totalValue += quantity * price;
}
if (inventoryByBrand[input]) {
  alert(
    `There are(is) ${
      inventoryByBrand[input].length
    } generation(s) of ${input.toUpperCase()} in inventory:\n\n${productsList}\nWith total value: ${(
      totalValue * 1000
    ).toLocaleString("da-DK", { style: "currency", currency: "VND" })}`
  );
} else {
  alert("No brand match that input!");
}
