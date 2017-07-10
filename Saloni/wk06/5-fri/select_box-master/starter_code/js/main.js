var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

var selection = document.querySelector("select");

for (var i = 0; i < cities.length; i++) {
	var newOption = document.createElement("option");
	newOption.textContent = cities[i]
	selection.appendChild(newOption);
};

var option = document.getElementById("city-type");
var option1 = option.selectedIndex;
var body = document.querySelector("body");
console.log(option);

var changeImage = function(event) {
	console.log(event.target);
	console.log(event.target.selectedIndex);
	if (option.selectedIndex == 1) {
		body.className = "nyc";
	} else if (option.selectedIndex == 2) {
		body.className = "sf";
	} else if (option.selectedIndex == 3) {
		body.className = "la";
	} else if (option.selectedIndex == 4) {
		body.className = "austin";
	} else if (option.selectedIndex == 5) {
		body.className = "sydney";
	}	else if (option.selectedIndex == 0) {
		body.className = '';
	}
};

option.addEventListener("change", changeImage);
// // option.options[option.selectedIndex].value






