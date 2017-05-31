// https://gist.github.com/epoch/0df5e2eeaadb8871b9a73887162c2ab4#file-js_week1_loops-md
for (var num = 0; num <= 20; num++) {
	if (num % 2 === 0) {
		console.log(num + ' is even');
	} else {
		console.log(num + ' is odd');
	}
}

// Multiplication Tables
for (var num = 0; num <= 10; num++) {
 for (var multi = 1; multi <= 10; multi++) {
 console.log(num + " * " + multi + " = " + num * multi); 
	}
}

// Your top choices
var topChoices = ["blue", "orange", "red"];
var number = ["1st", "2nd", "3rd"];
	for (var i = 0; i < topChoices.length; i++) {
	// console.log("My #" + (i+1) + " choice is " + topChoices[i])
	console.log("My " + (number[i]) + " choice is " + topChoices[i]);
}

// js- else-if 
// https://gist.github.com/epoch/309e4a021cd06f8ae32b#file-js-day2-else-if-md
var d = new Date ();
	var newyear = d.getFullYear();
var year = 2015;
if (year == newyear) {
	console.log("I'm in the present!");
} else if (year <= newyear) {
	console.log("Whoa! Blast from the past!");
} else if (year >= newyear) {
	console.log("Greetings from the future!"); 
}


