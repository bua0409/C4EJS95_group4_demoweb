//Question 1:
//1-d    2-c    3-a     4-b

//Question 2:
// let timingID = setInterval(() => console.log("hello"), 2000);

// setTimeout(() => {
//   clearInterval(timingID);
//   console.log("bye!");
// }, 6000);

//Question 3:
//3.1.No,it can't.the variable creayted using let only exist inside the block it was declared in
//3.2.No, it can't because u can only access variables that have the same or higher scope, and variables in func is smaller than global scope

//Question 4:
// let getLiTag = document.getElementsByTagName("LI");
// console.log(getTag[0]);
// for (let i = 0; i < getLiTag.length; i++) {
//   console.log(getLiTag[i]);
// }

//Question 5:
// let getDivTag = document.getElementsByTagName("div");
// console.log(getDivTag[1]);
// for (let i = 0; i < getDivTag.length; i++) {
//   console.log(getDivTag[i]);
// }

//Question 6:
// let removeElement = document.getElementById("singer-1");
// removeElement.remove();

//Question 7:
// button1.addEventListener("click", (e) => {
//   // Callback body
//   console.log(e.target);
// });
// button2.addEventListener("click", (e) => {
//   // Callback body
//   console.log(e.target);
// });
// input1.addEventListener("keydown", (e) => {
//   // Callback body
//   console.log(e.key);
// });
//7.1.It returns the element that triggered the event. In this case the <button id="button1/button2"></button>
//7.2. It returns the input characters.

//Question 8:
// const myInput = () => {
//   alert("My name is Son and i want to finish studying coding");
// };
// myInput();

//Question 9:
// let name, wish;
// const userInput = (name, wish) => {
//   name = prompt("Enter your name: ");
//   wish = prompt("Enter your wish: ");
//   alert(`My name is ${name} and i want to ${wish}`);
// };
// userInput(name, wish);

//Question 10:
// let name, wish;
// const userInput = (name, wish) => {
//   name = prompt("Enter your name: ");
//   wish = prompt("Enter your wish: ");
//   const result =
//     wish || ""
//       ? alert(`My name is ${name} and i want to ${wish}`)
//       : alert(`My name is ${name}`);
//   // (wish || ""):using shorthand evaluate, mean wish !== undefined & null & ""
// };
// userInput(name, wish);

//Question 11:
//11.1.Write an HTML for the UI above, create and link a JS file to it
//11.2.Get (Read) the ‘Upper it!!’ button
// const readBtn = document.getElementById("upper_btn");
// console.log(readBtn);
// //11.3->11.8
// const readInput = document.getElementById("name_input");
// console.log(readInput);
// const readDiv = document.getElementById("result_div");
// console.log(readDiv);
// console.log(readDiv.innerText.toUpperCase());
// upper_btn.addEventListener("click", () => {
//   console.log("Upper it!!!! just clicked");
//   const readElementInput = document.getElementById("name_input");
//   console.log(`User's name: ${readElementInput.value}`);
//   console.log(`User's name uppercase: ${readElementInput.value.toUpperCase()}`);
// });

//Question 12:

const items = ["Backpack", "MiBand watch", "Ring"];
const getItemsList = document.getElementById("item_list_ul");
const getInput = document.getElementById("item_input");
const getAddBtn = document.getElementById("add_btn");
console.log(items);
console.log(getItemsList);

//Create new li tag with remove button
const addElement = (arr) => {
  getItemsList.innerHTML = "";
  for (let item of items) {
    getItemsList.insertAdjacentHTML(
      "beforeend",
      `<li><span>${item}</span> <button class ="remove_btn">remove</button></li>`
    );
  }
};
addElement(items);

console.log(getInput);
console.log(getAddBtn);

//Event listener for the add button
getAddBtn.addEventListener("click", () => {
  console.log("Add button clicked");
  console.log("flip flop");
  items.push(getInput.value);
  addElement(items);
  addRemoveBtnListener(items);
  getInput.value = "";
  console.log(items);
});
// add listener for remove button
const getRemoveBtn = document.getElementsByClassName("remove_btn");
const addRemoveBtnListener = (items) => {
  for (let i = 0; i < items.length; i++) {
    getRemoveBtn[i].addEventListener("click", () => {
      console.log("Remove");
      console.log(`Item: ${i}`);
      getItemsList.removeChild(getItemsList.childNodes[0]);
      items.splice(i, 1);
      console.log(items);
    });
  }
};
addRemoveBtnListener(items);
