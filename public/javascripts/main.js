$(function(){



	$("#my-button").click(function(){
		$.ajax('/countries',{
			success:function(data){
				for (var i = 0; i < data.length; i++) {
					var newList = $('<ul>');
					var liName = $('<li>Name: {0}</li>'.supplant([data[i].name]));
					var liFrench = $('<li>French Name: {0}</li>'.supplant([data[i].frenchName]));
					var liLocal = $('<li>Local Name: {0}</li>'.supplant([data[i].localName]));
					var region = $('<li>Region: {0}</li>'.supplant([data[i].region]));
					var newCountry = newList.append(liName, liFrench, liLocal, region);
					$('body').append(newCountry);
				}
			}
		});
	});

















});