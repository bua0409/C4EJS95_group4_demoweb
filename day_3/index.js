// //1.
// let playerNames = ["Ronaldo", "Messi", "Neymar"];
// const userOpt = prompt("Do you want to add a player name(y/n):");
// if (userOpt === "y") {
//   playerNames[3] = prompt("Enter the name:");
//   alert(`New player name is ${playerNames[3]}`);
// } else {
//   alert("Good Bye!");
// }

// let booksCase = [
//   "book1",
//   "book2",
//   "book3",
//   "book4",
//   "book5",
//   "book6",
//   "book7",
//   "Book by Hung",
//   "book9",
//   "book10",
// ];

// for (let i = 0; i < booksCase.length; i++) {
//   if (booksCase[i] === "Book by Hung") {
//     booksCase[i] = "Book by Son";
//     console.log(`book number ${i + 1} now has name: ${booksCase[i]}`);
//     break;
//   }
// }

const resBills = [124, 48, 268];
let tipsMoney = [];
let finalPaid = [];

for (let i = 0; i < 3; i++) {
  if (resBills[i] < 50) {
    tipsMoney[i] = (resBills[i] * 2) / 10;
  } else if (resBills >= 50 && resBills <= 200) {
    tipsMoney[i] = (resBills[i] * 15) / 100;
  } else {
    tipsMoney[i] = (resBills[i] * 1) / 10;
  }
  finalPaid[i] = resBills[i] + tipsMoney[i];
}

console.log(`Tips money: ${tipsMoney}`);
console.log(`Final paid: ${finalPaid}`);

//Cmt code 3 nguoi
//nop bai trc 12h
//Watch vids no skip
//Question 13 turtle js
