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
		// var $list = $('<li></li')
		list.textContent = response['Search'][i].Title
		document.querySelector('ul').appendChild(list);
		}

	});
});
