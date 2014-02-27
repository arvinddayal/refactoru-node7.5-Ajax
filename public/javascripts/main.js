$(function(){
	

	$("#my-button").click(function(){
		$.ajax('/countries',{
			success:function(data){
				for (var i = 0; i < data.length; i++) {
					$('body').append(data[i].name);
				}
			}
		});
	});

















});