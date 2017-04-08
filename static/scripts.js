$(function(){
	$('select').change(function(ev){

		var b = $("#convert").val().toUpperCase();
		var a = $("#base").val().toUpperCase();
		if(a==b){
			$("#ter").html('1 '+a+' = 1 ' + b);
			return false;
		}

		var url="http://api.fixer.io/latest?base="+a;
		//$("#ex")[0].reset();
		$.getJSON(url,function(data){
			it=data.rates;

			$("#re").html('1 '+a+' = '+data.rates[b]+' ' + b);
			
		});
	});
});