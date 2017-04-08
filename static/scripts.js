$(function(){
	
	
		$("#qo").submit(function(h){
			var symbo=$("#symbol").val().toUpperCase();

			$.getJSON('/fetch',{symbol:symbo} ,function(jdata){
				console.log('getjson called');
				if(jdata.error){

					$("#te").html(jdata.error);
				}
				else{
					console.log('inside');
					$("#te").html('A stock of '+jdata.name+' ('+symbo + ') '+' costs '+jdata.price+'  USD ');
				}
				console.log(jdata);
			});
			console.log('prevent');
			h.preventDefault();

		});
		

});
	
