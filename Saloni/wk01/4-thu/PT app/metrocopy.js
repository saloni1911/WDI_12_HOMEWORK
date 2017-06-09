
// var origin;
// var destination;
// var trainLines = [
// {
//  name: "Alamein",
//  stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
// },
// {
//  name: "Glenwaverly",
//  stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
// },
// {
//  name: "Sandringham",
//  stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
// }
// ]

// var journeyPlanner = function(origin, destination) {
	
// 	for (i = 0; i < trainLines.length; i++) {
// 		if ((trainLines[i].stations.includes(origin)) || (trainLines[i].stations.includes(destination))) {
// 	   var interline = function(origin, destination) {
// 	   	for (i = 0; i < trainLines.length; i++) {
// 	   		if (trainLines[i].stations.includes(origin)) {
// 	   		 var initial = trainLines[i].stations.indexOf(origin);
// 	   		 var interlineone = trainLines[i].stations;
// 	   		 var rone = trainLines[i].stations.indexOf("Richmond");
// 	   		 console.log(initial);
// 	   		 console.log(interlineone);
// 	   		 console.log(rone);

// 	   		}
// 	   }
// 	   // start(origin);
// 	 }
// 	}
// }
	  // var routeone = interlineone.slice(initial, rone);
	  //  console.log(routeone);
	  //  console.log(routeone.join("----->"));
	
// journeyPlanner("Flagstaff", "Windsor");
// stop(destination, initial, interlineone, rone);
// console.log(initial);
// 	   		 console.log(interlineone);
// 	   		 console.log(rone);
// 	   		 console.log(routeone);
// 	   console.log(routeone.join("----->"));


	// var journeyPlanner = function(origin, destination) {  
	// for (i = 0; i < trainLines.length; i++) {
	// 	if ((trainLines[i].stations.includes(origin)) || (trainLines[i].stations.includes(destination))) {
	//     var stop = function(destination) {
	//     	for (i = 0; i < trainLines.length; i++) {
	//    		 if (trainLines[i].stations.includes(destination)) {
	// 			var final = trainLines[i].stations.indexOf(destination);
	//    		 var interlinetwo = trainLines[i].stations;
	//    		 var rtwo = trainLines[i].stations.indexOf("Richmond");
	//    		 console.log(final);
	//    		 console.log(interlinetwo);
	//    		 console.log(rtwo);
	//        }
	//       }
	//       stop(destination);
	//     }
	   	// var routetwo = interlinetwo.slice(rtwo, final+1);
	   	// console.log(routetwo);
	   	// console.log(routetwo.join("----->"));
//     }
//  }
//  }
// journeyPlanner("Flagstaff", "Windsor");

 

	// 	}
	

	// console.log("origin: " + origin + "\n" + "destination: " + destination);
// // console.log(routeone.join("----->")).concat(routetwo.join("----->"));






var origin;
var destination;
var initial;
var interlineone;
var rone;

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

// var calculatestop = function(initial, interlineone) {
// 	return
// }
// var arrayone = [];
var objectorigin = {};
var objectdestination = {};

var journeyPlanner = function(origin, destination) {
	
	for (i = 0; i < trainLines.length; i++) {
		if ((trainLines[i].stations.includes(origin)) || (trainLines[i].stations.includes(destination))) {
	   var start = function(origin) {
	   	for (i = 0; i < trainLines.length; i++) {
	   		if (trainLines[i].stations.includes(origin)) {
	   		 var initial = trainLines[i].stations.indexOf(origin);
	   		 var interlineone = trainLines[i].stations;
	   		 var rone = trainLines[i].stations.indexOf("Richmond");
     		var routeone = interlineone.slice(initial, rone);
     		var joinedrouteone = (routeone.join("----->")) ;
     		objectorigin.initial = trainLines[i].stations.indexOf(origin);
     		objectorigin.interlineone = trainLines[i].stations;
     		objectorigin.rone = trainLines[i].stations.indexOf("Richmond");
     		objectorigin.joinedrouteone = (routeone.join("----->")) ;
     		

	   		}
	   }
	   // var routeone = interlineone.slice(initial, rone);
	   // // console.log(routeone);
	   // // console.log(routeone.join("----->"));
	   // return (routeone.join("----->")) ;
	   
	   return objectorigin;
	   // console.log(array);
	   }
	  
	    var stop = function(destination) {
	    	for (i = 0; i < trainLines.length; i++) {
	   		 if (trainLines[i].stations.includes(destination)) {
				var final = trainLines[i].stations.indexOf(destination);
	   		 var interlinetwo = trainLines[i].stations;
	   		 var rtwo = trainLines[i].stations.indexOf("Richmond");
	   		 var routetwo = interlinetwo.slice(rtwo, final+1);
	   		 
	   	var joinedroutetwo = routetwo.join("----->");
	   		 objectdestination.final = trainLines[i].stations.indexOf(destination);
	   		 objectdestination.interlinetwo = trainLines[i].stations;
	   		 objectdestination.rtwo = trainLines[i].stations.indexOf("Richmond");
	   		 objectdestination.joinedroutetwo = routetwo.join("----->");
	   		 // console.log(final);
	   		 // console.log(interlinetwo);
	   		 // console.log(rtwo);
	       }
	      }
	      return objectdestination;
	   	// var routetwo = interlinetwo.slice(rtwo, final+1);
	   	// var joinedroutetwo = routetwo.join("----->");
	   	// console.log(routetwo);
	   	// console.log(routetwo.join("----->"));
	    }

 var x = start(origin);
 var y = stop(destination);

		}
	}

	console.log("origin: " + origin + "\n" + "destination: " + destination);
	console.log(x);
	console.log(y);

// console.log(routeone.join("----->")).concat(routetwo.join("----->"));
}
journeyPlanner("Flagstaff", "Windsor");




// var origin;
// var destination;
// var trainLines = [
// {
//  name: "Alamein",
//  stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
// },
// {
//  name: "Glenwaverly",
//  stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
// },
// {
//  name: "Sandringham",
//  stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
// }
// ]

// var journeyPlanner = function(origin, destination) {

// 	for (i = 0; i < trainLines.length; i++) {
// 			if (trainLines[i].stations.includes(origin) && trainLines[i].stations.includes(destination)) {
// 	   var begin = trainLines[i].stations.indexOf(origin);
// 	   var last = trainLines[i].stations.indexOf(destination);
// 	   var singleLine = trainLines[i].stations;
// 	   console.log(singleLine);
// 	   console.log("origin: " + origin + "\n" + "destination: " + destination);
// 	 }
//   }
 
//  	if ((last+1) > begin) {
// 	var singleRoute = singleLine.slice(begin, last);
// 	console.log(singleRoute.join("----->"));
// 	console.log((last - begin) + " stops total");
//   } else if (begin > (last+1)) {
//  	var singleRoute = singleLine.slice(last, begin+1);
//  	console.log(singleRoute.reverse().join("----->"));
//  	console.log((begin - last) + " stops total");
//  }
// };

// journeyPlanner("Windsor", "Richmond");






// var origin;
// var trainLines = [
// {
//  name: "Alamein",
//  stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
// },
// {
//  name: "Glenwaverly",
//  stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
// },
// {
//  name: "Sandringham",
//  stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
// }
// ]

// var journeyPlanner = function(origin) {

// 	for (i = 0; i < trainLines.length; i++) {
// 			if (trainLines[i].stations.includes(origin)) {
	   
// 	   console.log(origin);
// 	 }
//   }
// };

// journeyPlanner("Parliament");



	 

// var origin;
// var trainLines = {
//  alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
//  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
//  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
// }

// var journeyPlanner = function(origin) {
	
// if (trainLines.alamein.includes(origin)) {
	
// console.log(origin);
// }

// };
// journeyPlanner("Parliament");

