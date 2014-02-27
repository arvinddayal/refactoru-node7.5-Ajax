$(function(){


//Loads countries.json and populations DOM upon clicking "Load Countries"
	$("#my-button").click(function(){
		$.ajax('/countries',{
			success:function(data){
				$('.country-display').empty();
				for (var i = 0; i < data.length; i++) {
					var newList = $('<ul>');
					var liName = $('<li>Name: {0}</li>'.supplant([data[i].name]));
					var liFrench = $('<li>French Name: {0}</li>'.supplant([data[i].frenchName]));
					var liLocal = $('<li>Local Name: {0}</li>'.supplant([data[i].localName]));
					var region = $('<li>Region: {0}</li>'.supplant([data[i].region]));
					var newCountry = newList.append(liName, liFrench, liLocal, region);
					$('.country-display').append(newCountry);
				}
			}
		});
	});

//Search Function
	$('#search').click(function(e){
		e.preventDefault();
		$.ajax('/search', {
			data: $(this).prev().serialize(),
			success:function(data){
				console.log(data);
				$('.country-display').empty();
				var newList = $('<ul>');
				var liName = $('<li>Name: {0}</li>'.supplant([data.name]));
				var liFrench = $('<li>French Name: {0}</li>'.supplant([data.frenchName]));
				var liLocal = $('<li>Local Name: {0}</li>'.supplant([data.localName]));
				var region = $('<li>Region: {0}</li>'.supplant([data.region]));
				var newCountry = newList.append(liName, liFrench, liLocal, region);
				$('.country-display').append(newCountry);
			}
		});


	});















});