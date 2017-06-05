// https://gist.github.com/epoch/8292180#file-arrays-md
// 1. Create an array of the days of the week

var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 2. My calendar says the first day is Sunday.

days_of_the_week.pop();
days_of_the_week.unshift("Sunday");
console.log(days_of_the_week);

// 3. Create a new array of the days of the week:

var days = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

// 4. Remove either the weekdays or the weekends

var newDays = days.pop();
console.log(days);

// 5. Sort the remaining days alphabetically

console.log(days[0].sort());

// https://gist.github.com/epoch/04ab1bc291a5f3ff79de#file-week1-js-objects-md

var favouriteRecipe = {
	Title: "Mole",
	Servings: 2,
	Ingredients: ["cinnamon", "cumin", "cocoa"]
}
console.log("\u2022 " + favouriteRecipe.Title);
console.log("\u2022 " + "Serves: " + favouriteRecipe.Servings);
console.log("\u2022 " + "Ingredients:");
// console.log("\u2022 " + favouriteRecipe.Ingredients.join("\n"));
// .join (\n) will print array elements in string form and in different line.
// or
// console.log("\u2022 " + favouriteRecipe.Ingredients.join("\n\u2022"));

for (var i = 0; i < favouriteRecipe.Ingredients.length; i++) {
console.log("\u2022 " + favouriteRecipe.Ingredients[i]);
}

// The Reading List
var readingList = [
 {
 	title: "parasitology",
 	author: "abc",
 	alreadyRead: true
 },
 {
 	title: "immunology",
 	author: "def",
 	alreadyRead: false
 },
 {
 	title: "virology",
 	author: "ghi",
 	alreadyRead: true
 	// never put boolean in quotations because it will turn it in string
}
];
 
var list = function () {
	for (i = 0; i < readingList.length; i++) {
		console.log(readingList[i].title + " by " + readingList[i].author);
		if (readingList[i].alreadyRead === true) {
			// i can use - if (readingList[i].alreadyRead) because it will run when it is true only
			console.log('You already read "' + readingList[i].title + '" by ' + readingList[i].author);  
		} else {
			console.log('You still need to read "' + readingList[i].title + '" by ' + readingList[i].author);
		}
	}
};
list();

// The Movie Database
var favoriteMovie = {
		title: "Don",
		duration: 15,
		stars: ["abc", "def", "ghi"]
	}
 var movie = function () {
 	console.log(favoriteMovie.title + " lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars);
 };
 movie();
//  we can write 
// var movie = function () {
// 	return favoriteMovie.title + " lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars; 
// }
// console.log(function());
//  it allows us option whether to print the answer of function or not