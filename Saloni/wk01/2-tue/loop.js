// The even/odd reporter
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


