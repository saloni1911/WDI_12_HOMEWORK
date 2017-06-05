// https://gist.github.com/kasun-maldeni/e974a58d64ea62ad9a7b34f5efaf6a9a/
var origin;
var destination;
var trainLines = [
{
 name: "Alamein",
 stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
},
{
 name: "Glenwaverly",
 stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
},
{
 name: "Sandringham",
 stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}
]

var journeyPlanner = function(origin, destination) {

	for (i = 0; i < trainLines.length; i++) {
			if (trainLines[i].stations.includes(origin) && trainLines[i].stations.includes(destination)) {
	   var begin = trainLines[i].stations.indexOf(origin);
	   var last = trainLines[i].stations.indexOf(destination);
	   var singleLine = trainLines[i].stations;
	   console.log(singleLine);
	   console.log("origin: " + origin + "\n" + "destination: " + destination);
	 }
  }
 
 	if ((last+1) > begin) {
	var singleRoute = singleLine.slice(begin, last);
	console.log(singleRoute.join("----->"));
	console.log((last - begin) + " stops total");
  } else if (begin > (last+1)) {
 	var singleRoute = singleLine.slice(last, begin+1);
 	console.log(singleRoute.reverse().join("----->"));
 	console.log((begin - last) + " stops total");
 }
};

journeyPlanner("Windsor", "Richmond");











var origin;
var destination;

var trainLines = {
 alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
 glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
 sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

var journeyPlanner = function(origin, destination) {
console.log("origin: " + origin + "\n" + "destination: " + destination);
	var begin = trainLines.alamein.indexOf(origin);
	var last = trainLines.alamein.indexOf(destination);
	
	if ((last+1) > begin) {
	var stations = trainLines.alamein.slice(begin, last);
	//console.log(begin + '\n' + last + '\n' + stations);
	console.log(stations.join("----->"));
	console.log((last - begin) + " stops total");
 } else if (begin > (last+1)) {
 	// var draft = stations.reverse();
 	var stations = trainLines.alamein.slice(last, begin+1);
 	//console.log(begin + '\n' + last + '\n' + stations);
 	console.log(stations.reverse().join("----->"));
 	console.log((begin - last) + " stops total");
}
};

journeyPlanner("Burnley", "Flinders Street");

// var trainLines = [
// {
//  name: "alamein",
//  stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
// },
// {
//  name: "glenWaverly",
//  stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
// },
// {
//  name: "sandringham",
//  stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
// }
// ];

var origin;
var destination;

var journeyPlanner = function(origin, destination) {

for (var i = 0; i < trainLines[i].stations.length; i++) {
if (origin == trainLines[i].stations.includes(origin) && destination == trainLines[i].stations.includes(destination)) {
	console.log("origin: " + origin + "\n" + "destination: " + destination);
// } else if (origin == tarinLines.stations[i].inculdes(origin) || destination == tarinLines.stations[i].inculdes(destination)) {
// 	console.log("origin: " + origin + "\n" + "destination: " + destination);
// } 
}
}
};
journeyPlanner("Flinders Street", "Burnley");

	// console.log("origin" + ": '" + origin + "'\n" + "destination" + ": " + destination);
	// if (origin === trainLines.alamein[0] && destination === trainLines.alamein[5]) {

 //  	var b1 = trainLines.alamein.indexOf(origin);
	//   var l1 = trainLines.alamein.indexOf(destination);

 //  	for (var i = b1; i <= l1; i++) {
	// 	var answer = trainLines.alamein[i];
	// 	console.log(answer + " -----> ");
	// 	}
	// console.log((l1 - b1) + " stops total");


	// } else if (origin == trainLines.glenWaverly && destination == trainLines.glenWaverly) {
 //  	var b2 = trainLines.glenWaverly.indexOf(origin);
	//   var l2 = trainLines.glenWaverly.indexOf(destination);
 //  	console.log("origin" + ": " + origin + "\n" + "destination" + ": " + destination);
 //  	for (var i = b2; i <= l2; i++) {
	// 	var answer = trainLines.glenwaverly[i];
	// 	console.log(answer + " -----> ");
	// 	}
	// console.log((l2 - b2) + " stops total");
	// } else if (origin == trainLines.sandringham && destination == trainLines.sandringham) {
	// 	var b3 = trainLines.sandringham.indexOf(origin);
	//   var l3 = trainLines.sandringham.indexOf(destination);
 //  	console.log("origin" + ": " + origin + "\n" + "destination" + ": " + destination);
 //  	for (var i = b3; i <= l3; i++) {
	// 	var answer = trainLines.glenwaverly[i];
	// 	console.log(answer + " -----> ");
	// 	}
	// console.log((l3 - b3) + " stops total");


	
 // }
	// for (var i = begin; i <= last; i++) {
	// var answer = trainLines.alamein[i];
	// console.log(answer + " -----> ");
	// }
	// console.log((last - begin) + " stops total");
	// };
	// }
	// var origin = prompt("Select your origin point");
	// var destination = prompt("Select your destination"); 





	 

