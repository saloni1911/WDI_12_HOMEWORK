// https://gist.github.com/kasun-maldeni/e974a58d64ea62ad9a7b34f5efaf6a9a/

var origin;
var destination;
var initial;
var interLineOne;
var rOne;
var objectOrigin = {};
var objectDestination = {};

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
	  

	 } else if ((trainLines[i].stations.includes(origin)) || (trainLines[i].stations.includes(destination))) {

   	var start = function(origin) {
	   	for (i = 0; i < trainLines.length; i++) {
	   		if (trainLines[i].stations.includes(origin)) {
	   		 var initial = trainLines[i].stations.indexOf(origin);
	   		 var interLineOne = trainLines[i].stations;
	   		 var rOne = trainLines[i].stations.indexOf("Richmond");
     		
     		objectOrigin.initial = trainLines[i].stations.indexOf(origin);
     		objectOrigin.interLineOne = trainLines[i].stations;
     		objectOrigin.rOne = trainLines[i].stations.indexOf("Richmond");
     		
	   		}
	   }
	   return objectOrigin;
    }

    var stop = function(destination) {
	    	for (i = 0; i < trainLines.length; i++) {
	   		 if (trainLines[i].stations.includes(destination)) {
				var final = trainLines[i].stations.indexOf(destination);
	   		var interLineTwo = trainLines[i].stations;
	   		var rTwo = trainLines[i].stations.indexOf("Richmond");
	   		objectDestination.final = trainLines[i].stations.indexOf(destination);
	   		objectDestination.interLineTwo = trainLines[i].stations;
	   		objectDestination.rTwo = trainLines[i].stations.indexOf("Richmond");
 					}
	      }
	      return objectDestination;
			}

 		var x = start(origin);
 		var y = stop(destination);

		}
	}

	console.log("Origin: " + origin + "\n" + "Destination: " + destination);

	if ((last+1) > begin) {
		var singleRoute = singleLine.slice(begin, last+1);
		console.log("Route is " + singleRoute.join("----->"));
		console.log((last - begin) + " stops total");

  } else if (begin > (last+1)) {
 		var singleRoute = singleLine.slice(last, begin+1);
 		console.log("Route is " + singleRoute.reverse().join("----->"));
 		console.log((begin - last) + " stops total");
 		
 	} else if (x.rOne > x.initial && y.rTwo < y.final) {
		var routeOne = x.interLineOne.slice(x.initial, x.rOne);
    var joinedrouteOne = (routeOne.join("----->"));
	  var routeTwo = y.interLineTwo.slice(y.rTwo, y.final+1);
	  var joinedrouteTwo = (routeTwo.join("----->"));
	  console.log("Route is " + joinedrouteOne.concat("----->",joinedrouteTwo));
	  console.log(routeOne.length + routeTwo.length-1 + " stops total");

	} else if (x.rOne > x.initial && y.rTwo > y.final) {
		var routeOne = x.interLineOne.slice(x.initial, x.rOne);
    var joinedrouteOne = (routeOne.join("----->"));
	  var routeTwo = y.interLineTwo.slice(y.final, y.rTwo+1);
	  var joinedrouteTwo = (routeTwo.reverse().join("----->"));
	  console.log("Route is " + joinedrouteOne.concat("----->",joinedrouteTwo));
	  console.log(routeOne.length + routeTwo.length-1 + " stops total");


	} else if (x.rOne < x.initial && y.rTwo < y.final) {
		var routeOne = x.interLineOne.slice(x.rOne+1, x.initial+1);
    var joinedrouteOne = (routeOne.reverse().join("----->"));
	  var routeTwo = y.interLineTwo.slice(y.rTwo, y.final+1);
	  var joinedrouteTwo = (routeTwo.join("----->"));
	  console.log("Route is " + joinedrouteOne.concat("----->",joinedrouteTwo));
	  console.log(routeOne.length + routeTwo.length-1 + " stops total");

	} else if (x.rOne < x.initial && y.rTwo > y.final) {
		var routeOne = x.interLineOne.slice(x.rOne+1, x.initial+1);
    var joinedrouteOne = (routeOne.reverse().join("----->"));
    var routeTwo = y.interLineTwo.slice(y.final, y.rTwo+1);
	  var joinedrouteTwo = (routeTwo.reverse().join("----->"));
	  console.log("Route is " + joinedrouteOne.concat("----->",joinedrouteTwo));
	  console.log(routeOne.length + routeTwo.length-1 + " stops total");
 	}
};

journeyPlanner("Flinders Street", "Southern Cross");










	 

