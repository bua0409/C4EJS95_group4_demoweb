let favMovies = ["Tron", "Tenet", "Inception", "John Wick", "Parasite"];

const newMovie = prompt("Enter a movie");
favMovies.push(newMovie);
console.log(favMovies);

const movieIndex = prompt("Enter the movie's position");
console.log(`The movie is ${favMovies[movieIndex]}`);

let movieTitle = prompt("Enter a movie title");
movieTitle = favMovies[0];
console.log(movieTitle);
let moviePos = prompt("Enter a position");
movieTitle = favMovies[moviePos];
console.log(movieTitle);

const deletePos = prompt("Enter a number");
const deleteNum = prompt("Enter how many");
favMovies.splice(deletePos, 1);
console.log(...favMovies);

console.log(...favMovies);
for (let i = 0; i < favMovies.length / 2; i++) {
  console.log(favMovies[i]);
}
for (let i = 0; i < favMovies.length; i++) {
  console.log(`${i + 1}. ${favMovies[i]}`);
}

for (let i = 0; i < favMovies.length; i++) {
  favMovies[i] = favMovies[i].toLowerCase();
}
console.log(...favMovies);

let userName = prompt("Register an usename");
while (true) {
  if (userName.length > 15) {
    alert("Your username is too long");
    userName = prompt("Re-enter the username");
  } else {
    alert("Good username");
    break;
  }
}

console.log("How many legs does a spider have");
console.log("1. None");
console.log("2. 4 legs");
console.log("3. 8 legs");
console.log("4. 12 legs");

while (true) {
  let inputChoice = parseInt(prompt("Enter a choice"));
  if (!inputChoice || inputChoice > 4 || inputChoice < 1) {
    alert("Invalid choice !");
  } else if (inputChoice === 3) {
    alert("Bravo, you are correct");
    break;
  } else {
    alert("Good luck next time");
    break;
  }
}
