//https://gist.github.com/epoch/7340af256ffc9f734cda4326cc6805d8#file-cakepudding-md
//https://en.wikipedia.org/wiki/Hangman_(game)

var turns = document.querySelector("#turns");
//var alphabetsGuessed = document.querySelector("#guesses");
var inputBox = document.querySelector("#input");
var guessBtn = document.querySelector("#add");
var correctWord = document.querySelector("#correctWord");

var word = "sachin";
var wordArray = [];
//var wordArray = word.split("");
var spaces = [];
wordArray.push(word.split(""));

// var dashes = function() {
for (i = 0; i < word.length; i++) {
	spaces.push("_");
	}
	correctWord.textContent = spaces.join(" ");

// dashes();


//var guessGame = function() {
	guessBtn.addEventListener("click", function() {
	for (var i = 0; i < wordArray.length; i++) {
		if (wordArray[i].includes(inputBox.value)) {
		//if (word.indexOf(inputBox.value) > -1) {
			
			console.log(inputBox.value);
			var correctWord = document.querySelector("#correctWord");
			var cW = document.createElement("li");
			cW.textContent = inputBox.value;
			correctWord.appendChild(cW);
			
		} else if (inputBox.value !== wordArray.includes(inputBox.value)) {
			console.log(inputBox.value);
			var alphabetsGuessed = document.querySelector("#guesses");
			var aG = document.createElement("li");
			aG.textContent = inputBox.value;
			alphabetsGuessed.appendChild(aG);
		
		}
	}
});
// }

// guessGame();

// btn.addEventListener("click", function() {
// 	console.log(inputBox.value);
// 	var newListItem = document.createElement("li");
// 	newListItem.textContent = inputBox.value;
// 	list.appendChild(newListItem);
// });


//<span id="one">__ </span> <span id="two">__ </span> <span id="three">__</span> <span id="four">__ </span> <span id="five">__ </span> <span id="six">__ </span>



