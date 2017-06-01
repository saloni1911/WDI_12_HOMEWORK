// https://gist.github.com/epoch/4b64c03fda9afb2002c263ba1f7841d8#file-wdi_week1_checkpoint_assessment-md

var captain = "Jack";
var phrase = ("Oh " + captain + ", " + "my " + captain + "!");

// JS Conditionals

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
	console.log("SOS!");
}

// Data Structures - JS Arrays

var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday");
var day = weekend[1];
weekend.shift();

// Data Structures - JS Objects

var brain = {
	energyLevel: 10
}

var energy = brain.energyLevel;
brain.dream = "electric sheep";

// JS Functions

var area = function(length, bredth) {
	return length * bredth;
}
area(3, 4);
