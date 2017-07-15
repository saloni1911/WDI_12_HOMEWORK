var $btn = $('button');

$btn.on("click", function(event) {
	// var gifName = document.querySelector('input').value;
	$gifName = $('input')[0].value
	event.preventDefault();

	var settings = {
		url: 'https://api.giphy.com/v1/gifs/search',
		data: {
			q: $gifName, 
			apiKey: '64c56751889c42608e2df4a81bcba09a'
		}
	}

	$.ajax(settings).done(function(response) { 
		console.log(response);
		var giphies = response.data;
		console.log(giphies);

		giphies.forEach(function(giphy) {
			var source = $('#giphy-template').html()
			console.log(source);
			var template = Handlebars.compile(source);

			var html = template({image: giphy.images.original_still.url});
			 $('.print').append(html);

		})
	})
})