//Bubble sort optimized
const arrSort = [3, 4, 1, 0, 9, 5, 1000, 2];
const lengthArr = arrSort.length;
for (let i = 0; i < lengthArr; i++) {
  let swapFlag = false;
  for (let j = 0; j < lengthArr; j++) {
    if (arrSort[j] > arrSort[j + 1]) {
      const temp = arrSort[j];
      arrSort[j] = arrSort[j + 1];
      arrSort[j + 1] = temp;
      swapFlag = true;
    }
  }
  if (!swapFlag) {
    break;
  }
}
console.log(...arrSort);

//1. for and Object
//1.1. x receives properties from product.
//1.2
const product = {
  name: "Xiaomi rice cooker",
  price: 1700,
  brand: "Xiaomi",
  color: "white",
};

for (let prop in product) {
  console.log(`${prop}: ${product[prop]}`);
}

//2.
const task = {
  subject: "Implement login feature",
  createdBy: "Hoang Ngoc Duc",
  assignTo: "Nguyen Phuong Nam",
  dueDate: "2019-10-08T18:00:24+0000",
  expectedHours: 0.5,
};

const { subject, assignTo, dueDate } = task;
console.log(`${subject}\n${assignTo}\n${dueDate}`);

//3.
const jobSearch =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
//Data is in the link

// console.log(jobSearch);
//3.1.The outermost layer is an object.
//3.2.The hits property is an array.
//3.3.We can use object desrtucturing like this, example:
for (let i = 0; i < jobSearch.hits.length; i++) {
  const {
    jobTitle,
    locations,
    jobSalary,
    benefits,
    skills,
    jobRequirement,
  } = jobSearch.hits[i];
  console.log(`job: ${jobTitle}\nlocation: ${locations}\nsalary: ${jobSalary}`);
  console.log("benefits:");
  for (let j = 0; j < benefits.length; j++) {
    console.log(benefits[j].benefitValue);
  }
  console.log(`\nSkills: ${skills}\nrequirement: ${jobRequirement}`);
  console.log(
    "------------------------------------------------------------------"
  );
}

//4.Initialize an object to represent a dictionary, with properties as
// keyword and values as explanation, the initial values are from this table
const dictionary = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for ‘error’",
  pm:
    "The short version  of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
//4.1 & 4.2
alert("Hi there, this is dev dictionary");
const USER_INPUT = prompt("Enter a keyword");
if (USER_INPUT === "") {
  alert("The word is not found");
} else if (dictionary[USER_INPUT] === undefined) {
  const USER_ADD = prompt(
    `We could not find your word: ${USER_INPUT}, leave your explanation`
  );
  dictionary[USER_INPUT] = USER_ADD;
  alert("Done");
} else {
  alert(`${USER_INPUT}\n${dictionary[USER_INPUT]}`);
}

//Initialize a variable named products, containing an array of products,
//each product has a name, price, brand, category, and color
const products = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
    providers: ["Phukienzero", "Dientuccc"],
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "Phone",
    providers: ["Tgdd", "Ddghn", "VhStore"],
  },
  {
    name: "IPhone X",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
    providers: ["tgdd"],
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
    providers: ["tgdd"],
  },
];
//5.1.Print/log name and price of all the products out
for (let i = 0; i < products.length; i++) {
  console.log("--------------------------------------");
  console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
}
//5.2.Write a script printing/logging out the products with their number,
//then print/logging out the details of a product with its position entered by users
for (let i = 0; i < products.length; i++) {
  console.log(`#${i + 1}. ${products[i].name}\n\tPrice: ${products[i].price}`);
}
const USER_CHOICE = prompt("Enter product position:");
const { name, brand, price, color, category } = products[
  parseInt(USER_CHOICE) - 1
];
console.log(
  `Name: ${name}\nBrand: ${brand}\nPrice: ${price}\nColor: ${color}\nCategory: ${category}`
);

//5.3
let flag = false;
const USER_INPUT = prompt("Enter your category").toLowerCase();
for (let i = 0; i < products.length; i++) {
  if (products[i].category.toLowerCase() === USER_INPUT) {
    console.log("------------------------------------------");
    console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
    flag = true;
  }
}
if (!flag) {
  alert("No category match your input");
}

//5.4.Add providers to each product
for (let i = 0; i < products.length; i++) {
  console.log(
    `#${i + 1}. ${products[i].name}\n\tPrice: ${
      products[i].price
    }\n\tProviders: ${products[i].providers}`
  );
}

//5.5.Search the products based on the wanted provider entered by users
const USER_INPUT = prompt("Enter provider").toLowerCase();
let flag = false;
for (let i = 0; i < products.length; i++) {
  const { name, brand, price, color, category, providers } = products[i];
  for (let j = 0; j < products[i].providers.length; j++) {
    if (USER_INPUT === products[i].providers[j].toLowerCase()) {
      console.log("------------------------------------------");
      console.log(
        `Name: ${name}\nBrand: ${brand}\nPrice: ${price}\nColor: ${color}\nCategory: ${category}\nProviders: ${providers}`
      );
      flag = true;
    }
  }
}
if (!flag) {
  alert("No products match the provider given");
}

//6.Write a script to store and process the learning tasks to become a front-end developer
const learningProcess = [
  {
    name: "HTML",
    complete: false,
  },
  {
    name: "CSS",
    complete: false,
  },
  {
    name: "Basics of Javascript",
    complete: false,
  },
  {
    name: "Node Package Manager (npm)",
    complete: false,
  },
  {
    name: "Git",
    complete: true,
  },
];
// //6.1.Print it out
console.log();
function readArr() {
  console.log(
    "Hi there, this is your learning tasks to front-end developer career:"
  );
  for (let i = 0; i < learningProcess.length; i++) {
    const { name, complete } = learningProcess[i];
    console.log(`${i + 1}.  ${name}\n\tComplete: ${complete}`);
  }
  console.log(
    "----------------------------------------------------------------------"
  );
}
readArr();

const arrLength = learningProcess.length;
const USER_OPT = prompt(
  "Enter your command(New, Delete, Update, Complete)"
).toLowerCase();
switch (USER_OPT) {
  //6.2.Let users add new task
  case "new":
    const ADD_TASK = prompt("Enter new task");
    learningProcess.push({ name: ADD_TASK, complete: false });
    readArr();
    break;
  //6.3.Let users update task
  case "update":
    const ADD_POS = prompt("Enter position");
    const ADD_TITLE = prompt("Enter new title");
    learningProcess[parseInt(ADD_POS) - 1].name = ADD_TITLE;
    readArr();
    break;
  //6.4.Let users complete task
  case "complete":
    const COMPLETE_POS = prompt("Enter position");
    learningProcess[parseInt(COMPLETE_POS) - 1].complete = true;
    readArr();
    break;
  //6.5.Let users delete task
  case "delete":
    const DEL_POS = prompt("Enter position");
    learningProcess.splice(DEL_POS - 1, 1);
    readArr();
    break;
}
//6.6.(Optional) Make printing / logging better
console.log(
  "Hi there, this is your learning tasks to front-end developer career:"
);
for (let i = 0; i < learningProcess.length; i++) {
  const { name, complete } = learningProcess[i];
  if (learningProcess[i].complete === false) {
    console.log(`${i + 1}. [ ] ${name}\n\tComplete: ${complete}`);
  } else {
    console.log(`${i + 1}. [x] ${name}\n\tComplete: ${complete}`);
  }
}
console.log(
  "----------------------------------------------------------------------"
);

// //7.
clear();
const pos = {
  x: 200,
  y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

//8.
clear();
const square = {
  x: 100,
  y: 50,
  width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}
//9.
clear();
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};

penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
rt(90);
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.width);
  lt(90);
  fd(rect.height);
  lt(90);
}
//10.
clear();
const cmds = [
  {
    shape: "rect",
    x: 8,
    y: 70,
    width: 12,
    height: 40,
  },
  {
    shape: "rect",
    x: 70,
    y: 70,
    width: 12,
    height: 40,
  },
  {
    shape: "rect",
    x: 10,
    y: 20,
    width: 70,
    height: 20,
  },
  {
    shape: "square",
    x: 20,
    y: 40,
    width: 50,
  },
  {
    shape: "square",
    x: 25,
    y: 40,
    width: 14,
  },
  {
    shape: "square",
    x: 33,
    y: 42,
    width: 6,
  },
  {
    shape: "square",
    x: 50,
    y: 40,
    width: 14,
  },
  {
    shape: "square",
    x: 58,
    y: 42,
    width: 6,
  },
  {
    shape: "square",
    x: 40,
    y: 25,
    width: 8,
  },
  {
    shape: "square",
    penWidth: 1,
    x: 500,
    y: 500,
    width: 15,
  },
];
for (let i = 0; i < cmds.length; i++) {
  if (cmds[i].shape === "square") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    pendown();
    for (let j = 0; j < 4; j++) {
      fd(cmds[i].width);
      rt(90);
    }
    home();
  } else {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    rt(90);
    pendown();
    for (let i = 0; i < 2; i++) {
      fd(cmds[i].width);
      rt(90);
      fd(cmds[i].height);
      rt(90);
    }
    home();
  }
}

//11. Add circle to the command
clear();
const circle = {
  shape: "circle",
  x: 100,
  y: 50,
  radius: 30,
};
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
fd(circle.radius);
rt(90);
pendown();
for (let i = 0; i < 99; i++) {
  rt(360 / 99);
  fd(2);
}
home();

//12.
clear();
const cmds =
  "https://gist.githubusercontent.com/qhuydtvt/1e63092d33122aded10e72b72337188c/raw/68c610d897555cdf186e7a0e105ed2e866caf313/cmdExtended.js";
//Data is in the link
for (let i = 0; i < 11; i++) {
  if (cmds[i].shape === "circle") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    fd(cmds[i].radius);
    rt(90);
    pendown();
    for (let i = 0; i < 99; i++) {
      rt(360 / 99);
      fd(2);
    }
    home();
  } else if (cmds[i].shape === "square") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    pendown();
    for (let j = 0; j < 4; j++) {
      fd(cmds[i].width);
      rt(90);
    }
    home();
  } else if (cmds[i].shape === "rect") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    rt(90);
    pendown();
    for (let i = 0; i < 2; i++) {
      fd(cmds[i].width);
      rt(90);
      fd(cmds[i].height);
      rt(90);
    }
    home();
  }
}

//15.
const jobData =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
//Data is in the link
//15.1.Get all the job hits
console.log(jobData.hits);
//15.2.Get the first job hit
console.log(jobData.hits[0]);
//15.3.Get jobTitle of the first job
const { jobTitle } = jobData.hits[0];
console.log(`First job title:\n${jobTitle}`);
//15.4.Get the benefits of the first job hit
const { benefits } = jobData.hits[0];
console.log(benefits);
//15.5.Log out first job hit benefit values
console.log("First job hit benefits");
for (let i = 0; i < benefits.length; i++) {
  console.log(`- ${benefits[i].benefitValue}`);
}
//15.6.Log out jobTitle and benefitValue of all job hits
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
//15.7.Log out jobTitle, locations, skills, jobSalary of all job hits
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

//16.
const oldData = {
  firedRice: {
    price: 30,
    vnName: "Com rang dua bo",
  },
  noddle: {
    price: 20,
    vnName: "My tom chanh",
  },
  pho: {
    price: 35,
    vnName: "Pho bo tai chin",
  },
};

let newData = { ...oldData };
console.log(`Before: ${newData}`);
delete newData.noddle;
console.log(`Now: ${newData}`);
