// var $btn = $('button');

// $btn.on("click", function(event) {

// var movieName = document.querySelector('input').value;

// 	event.preventDefault(); 
// 	console.log("search movie with ajax");
// 	var settings = {
// 		url: 'http://omdbapi.com/',
// 		data: {
// 			s: movieName, 
// 			apiKey: '2f6435d9'
// 		}
// 	}

// 	$.ajax(settings).done(function(response) { 
// 		console.log(response);
// 		var newunList = document.createElement('ul');
// 		document.querySelector('h2').appendChild(newunList);

// 		for (var i = 0; i < response['Search'].length; i++) {
// 		var list = document.createElement('li');
// 		// var $list = $('<li></li')
// 		list.textContent = response['Search'][i].Title
// 		document.querySelector('ul').appendChild(list);
// 		}

// 	});
// });


var $btn = $('button');

$btn.on("click", function(event) {

var movieName = document.querySelector('input').value;

	event.preventDefault(); 
	console.log("search movie with ajax");
	var settings = {
		url: 'http://omdbapi.com/',
		data: {
			s: movieName, 
			apiKey: '2f6435d9'
		}
	}

	$.ajax(settings).done(function(response) { 
		console.log(response);
		var newunList = document.createElement('ul');
		document.querySelector('h2').appendChild(newunList);

		for (var i = 0; i < response['Search'].length; i++) {
			var list = document.createElement('li');
			// list.textContent = response['Search'][i].Title
			var link = document.createElement('a');
			link.setAttribute('href', 'http://www.imdb.com/title/' + response['Search'][i].imdbID + '/');
			link.setAttribute('onclick', 'window.open(this.href); return false;');
			link.textContent = response['Search'][i].Title

			list.appendChild(link);
			document.querySelector('ul').appendChild(list);
		}
	});
});


















