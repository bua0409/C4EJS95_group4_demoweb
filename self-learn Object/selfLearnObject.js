//C4EJS95-student-book
//1.
// let personProfile = {
//   name: "Cristiano Ronaldo",
//   yearOfBirth: 1985,
//   nationality: "portuguese",
// };

// const userInput = prompt(
//   "Do u want to add more information? (Y/N)"
// ).toLowerCase();
// if (userInput === "y") {
//   const inputProp = prompt("What property do uwant to add?");
//   const inputValue = prompt("Add the value");
//   personProfile[inputProp] = inputValue;
//   console.log(personProfile);
// } else if (userInput === "n") {
//   alert("Good bye");
// }

// personProfile.name = "Lionel Messi";
// personProfile.yearOfBirth = "1987";
// personProfile.nationality = "Argentinas";
// console.log(personProfile);

// const userInputDel = prompt(
//   "Do you want to delete a property? (Y/N)"
// ).toLowerCase();
// if (userInputDel === "y") {
//   const inputDelProp = prompt("What property do u want to delete?");
//   delete personProfile[inputDelProp];
//   console.log(personProfile);
// } else if (userInputDel === "n") {
//   alert("Good bye");
// }

//2.
// let inventory = {
//   gold: 500,
//   pouch: ["flint", "twine", "gemstone"],
//   backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
// };
// //Thêm một property với tên "pocket", với value là một Array
// //bao gồm các phần tử "seashell", "strange berry", và "lint".
// inventory.pocket = ["seashell", "strange berry", "lint"];
// console.log(inventory);
// //Xóa phần tử "dagger" trong Array của property backpack.
// inventory.backpack.splice(inventory.backpack.indexOf("dagger"), 1);
// console.log(inventory);
// //Cộng thêm 50 vào giá trị của gold (Giá trị sau khi cộng là 550)
// const ADD_IN = 50;
// inventory.gold += ADD_IN;
// console.log(inventory.gold);
// //Xóa toàn bộ thông tin liên quan đến pouch.
// inventory.pouch;
// console.log(inventory);

//Mindx app
// let movie = {
//   title: "The dark knight rises",
//   year: 2012,
//   rate: 8.4,
// };
// console.log(movie);
// console.log(movie.director);

// let favThings = ["sport", "lol", "bts", "book", "coding"];
// let [first, second, third, nearLast, last] = favThings;
// console.log(first.toUpperCase());
// console.log(nearLast.toUpperCase());
// console.log(last.toUpperCase());

// let movie = {
//   title: "ATTACK ON TITANS",
//   rate: 8.8,
//   year: 2013,
// };

// const USER_OPT = prompt("What do you want to know");
// if (movie[USER_OPT] == null || movie[USER_OPT] == undefined) {
//   alert(`${USER_OPT} does not exist in our data`);
// } else {
//   alert(movie[USER_OPT]);
// }

// movie.rate = 8.7;
// movie.rate += 0.5;

// const USER_UPDATE = prompt("What do you want to update?");
// const UPDATE_PROP = prompt("What is the update?");
// movie[USER_UPDATE] = UPDATE_PROP;
// console.log(movie);

// const USER_UPDATE = prompt("What do you want to update?");
// if (movie[USER_UPDATE] == null || movie[USER_UPDATE] == undefined) {
//   alert(`${USER_UPDATE} does not exist in our data, we will add new`);
//   const UPDATE_PROP = prompt("Enter the new data");
//   movie[USER_UPDATE] = UPDATE_PROP;
//   console.log(movie);
// } else {
//   const UPDATE_PROP = prompt("What is the update?");
//   movie[USER_UPDATE] = UPDATE_PROP;
//   console.log(movie);
// }

// let movies = [
//   { title: "John Wick", rate: 8.8, year: 2014 },
//   { title: "Avatar", rate: 9.2, year: 2009 },
//   { title: "Tenet", rate: 8.2, year: 2020 },
// ];
// console.log(movies[0]);
// console.log(movies[movies.length - 1].title);
// console.log(movies);

// for (let i = 0; i < movies.length; i++) {
//   console.log("---------------------");
//   console.log(movies[i].title);
//   console.log(`year: ${movies[i].year}`);
//   console.log(`rate: ${movies[i].rate}`);
// }

// console.log((movies[movies.length - 1].rate += 0.7).toFixed(1));

// let movie = {
//   title: "Boxtrolls",
//   year: 2014,
//   rate: 6.9,
//   characters: ["charA", "charB", "charC"],
// };

// console.log(movie.title);
// console.log(`Year: ${movie.year}`);
// console.log(`Rate: ${movie.rate}`);
// console.log(`Casts: ${[...movie.characters]}`);
// // let [name1, name2, name3] = movie.characters;
// // console.log(`Casts: ${name1} ${name2} ${name3}`);
// movie.characters.push("charD");
// console.log(`Casts: ${[...movie.characters]}`);

const moviesDatas = {
  total_results: 4,
  results: [
    {
      popularity: 512.119,
      vote_count: 460,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      id: 475557,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      original_language: "en",
      original_title: "Joker",
      genres: [80, 18, 53],
      title: "Joker",
      vote_average: 8.8,
      overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      release_date: "2019-10-04",
    },
    {
      popularity: 241.402,
      vote_count: 598,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
      id: 429203,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
      original_language: "en",
      original_title: "The Old Man & the Gun",
      genres: [35, 80, 18],
      title: "The Old Man & the Gun",
      vote_average: 6.3,
      overview:
        "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
      release_date: "2018-09-28",
    },
    {
      popularity: 233.735,
      vote_count: 4139,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      id: 429617,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      original_language: "en",
      original_title: "Spider-Man: Far from Home",
      genres: [28, 12, 878],
      title: "Spider-Man: Far from Home",
      vote_average: 7.6,
      overview:
        "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      release_date: "2019-07-02",
    },
    {
      popularity: 158.333,
      vote_count: 323,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
      id: 522938,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
      original_language: "en",
      original_title: "Rambo: Last Blood",
      genres: [28, 53],
      title: "Rambo: Last Blood",
      vote_average: 6.1,
      overview:
        "When John Rambo's niece travels to  Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
      release_date: "2019-09-20",
    },
  ],
};

//1.
// console.log(`Movies count: ${moviesDatas.total_results}`);
// //2.
// console.log("First movie's data:");
// console.log(moviesDatas.results[0]);
// //3.
// console.log(`title: ${moviesDatas.results[0].title}`);
// console.log(`vote_average: ${moviesDatas.results[0].vote_average}`);
// console.log(`genres: ${moviesDatas.results[0].genres}`);
// //4.
// console.log("\n\n");
// for (let i = 0; i < moviesDatas.results.length; i++) {
//   console.log("--------------------------------------");
//   console.log(`title: ${moviesDatas.results[i].title}`);
//   console.log(`vote_average: ${moviesDatas.results[i].vote_average}`);
//   console.log(`genres: ${moviesDatas.results[i].genres}`);
// }

//---------------------------------
// console.log("\n\n");
// const USER_INPUT = prompt("Enter the genres you like");
// let flag = false;
// for (let i = 0; i < moviesDatas.results.length; i++) {
//   for (let j = 0; j < moviesDatas.results[i].genres.length; j++) {
//     if (parseInt(USER_INPUT) === moviesDatas.results[i].genres[j]) {
//       console.log(moviesDatas.results[i].title);
//       flag = true;
//     }
//   }
// }
// if (!flag) {
//   alert("No genres match your taste!");
// }

//----------------------------------
console.log("\n\n");
const USER_RATE = prompt("Enter the minimum rate you want");
let flag = false;
for (let i = 0; i < moviesDatas.results.length; i++) {
  if (parseFloat(USER_RATE) < moviesDatas.results[i].vote_average) {
    console.log(moviesDatas.results[i].title);
    flag = true;
  }
}
if (!flag) {
  alert("No films match!");
}
