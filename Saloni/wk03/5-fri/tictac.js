var parent = document.getElementsByClassName('parent')[0];
var replay = document.querySelector("#replay");
var div = document.getElementsByTagName("div");
var timer = document.querySelector("#timer");
var setTimerBtn = document.querySelector("#setTimer");
var startbtn = document.querySelector("#start");
var timerId;
var seconds;
var counter = 0;
var boolean = false;
var arr = [0,1,2,3,4,5,6,7,8];

var player1Wins = 0;
var player2Wins = 0;
var wins = document.querySelector("#winCounter");

setTimerBtn.addEventListener("click", function() {
	seconds = prompt("Set time in seconds");
	timer.textContent = seconds;
});

var updateTime = function() {
	if (seconds >= 1) {
		seconds = seconds -= 1;
		timer.textContent = seconds;	
	}
	if (seconds == 0) {
		boolean = true;
	}
}

startbtn.addEventListener("click", function() {
		clearInterval(timerId);
		timerId = setInterval(updateTime, 1000);	
});


var restart = function() {
clearInterval(timerId);
	boolean = false;
	for (var i = 0; i < div.length; i++) {
		div[i].textContent = "";
	}
	counter = 0;
	arr = [0,1,2,3,4,5,6,7,8];
}


var winCounter = function(x) {
	if (x == "X") {
		player1Wins++;
	} else {
		player2Wins++;
	}
	wins.textContent = player1Wins + " : " + player2Wins;
}

var x, y, z;
var checkEquality = function(x, y, z) {
	if (x == y && y == z && x == z) {
		console.log("player with " + x + " symbol is a winner");
		winCounter(x);
		setTimeout(restart, 1000);
		return true;
	// if (x == "X") {
	// 	player1Wins++;
	// } else {
	// 	player2Wins++;
	// }
	// 	wins.textContent = player1Wins + " : " + player2Wins;
	// 	// winCounter(x);
	// 	//restart();
	}
}


var winnerRule = function() {
	if (checkEquality(arr[0], arr[1], arr[2])) {
		//event.target.className = "cross";
	} else if (checkEquality(arr[0], arr[3], arr[6])) {
	} else if (checkEquality(arr[6], arr[7], arr[8])) {
	} else if (checkEquality(arr[2], arr[5], arr[8])) {
	} else if (checkEquality(arr[2], arr[4], arr[6])) {
	} else if (checkEquality(arr[0], arr[4], arr[8])) {
	} else if (checkEquality(arr[3], arr[4], arr[5])) {
	} else if (checkEquality(arr[1], arr[4], arr[7])) {
	} else if (counter >= 9) {
		console.log("Draw");
		setTimeout(restart, 1000);
		//restart();
	}

}


//https://lh6.ggpht.com/Ir1ODDSNpKFM7CDrbZdQjsCIqy2xXD2xAe009oJ-yaK9SeZdA6PJsAhmZ1xo8jXEBA=w300

// var winnerRule = function() {
// 	if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] == arr[2] ) {
// 		console.log("player with " + arr[0]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] == arr[6]) {
// 		console.log("player with " + arr[0]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] == arr[8]) {
// 		console.log("player with " + arr[6]+ " aymbol is a winner");
// 		restart();
// 	} else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] == arr[8]) {
// 		console.log("player with " + arr[2]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[2] == arr[4] && arr[4]== arr[6] && arr[2] == arr[6]) {
// 		console.log("player with " + arr[2]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] == arr[8]) {
// 		console.log("player with " + arr[0]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] == arr[5]) {
// 		console.log("player with " + arr[3]+ " symbol is a winner");
// 		restart();
// 	} else if (arr[1] == arr[4] && arr[4]== arr[7] && arr[1] == arr[7]) {
// 		console.log("player with " + arr[1]+ " symbol is a winner");
// 		restart();
// 	} else if (counter >= 9) {
// 		console.log("Draw");
// 	}
// }

// var addImage = function(event) {
// 	if (counter % 2 == 0) {
// 		event.target.innerHTML = "<img src='https://lh6.ggpht.com/Ir1ODDSNpKFM7CDrbZdQjsCIqy2xXD2xAe009oJ-yaK9SeZdA6PJsAhmZ1xo8jXEBA=w300'/>"
// 	}https://lh6.ggpht.com/Ir1ODDSNpKFM7CDrbZdQjsCIqy2xXD2xAe009oJ-yaK9SeZdA6PJsAhmZ1xo8jXEBA=w300
// }http://thumbs2.ebaystatic.com/d/l225/m/mQgKeBqD0HaN5O5A4i-I1iw.jpg

var switchSymbol = function(event) {
	if (event.target.textContent != "O" && event.target.textContent != "X" && boolean == false) {
		var cell = event.target.getAttribute("data-cell");
		  	cell = cell-1;
		if (counter % 2 == 0) {
			event.target.textContent = "X";
			arr[cell] = "X";
			//event.target.innerHTML = "<img src='http://nobodyintheworld.com/PO/v.png' width='125px' height='110px'/>"
			//arr[cell] = "<img src='https://lh6.ggpht.com/Ir1ODDSNpKFM7CDrbZdQjsCIqy2xXD2xAe009oJ-yaK9SeZdA6PJsAhmZ1xo8jXEBA=w300'/>";
		} else {
			event.target.textContent = "O";
			arr[cell] = "O";
			//event.target.innerHTML = "<img src='http://nobodyintheworld.com/PX/v.png' width='125px' height='110px'/>"
			//arr[cell] = "http://nobodyintheworld.com/PX/v.png";
		}
		counter++; 

	winnerRule();
	}
}




parent.addEventListener("click", switchSymbol);

replay.addEventListener("click", restart);













