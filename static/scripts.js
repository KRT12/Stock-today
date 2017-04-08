$(function(){
	// $("#for").submit(function(e){
	// 	if($("#name").val()=='')
	// 	{
	// 		console.log("enter username");
	// 		$("#name").css("backgroundColor","pink");
	// 		e.preventDefault();
			

	// 	}
	// 	// $.getJSON('/up',function(data){
	// 	// 	console.log(data);
	// 	// 	console.log("hi");
	// 	// 	e.preventDefault();

	// 	// });

		
	// 	if($("#pass").val()=='')
	// 	{
	// 		console.log("enter password");
	// 		$("#pass").css("backgroundColor","pink");
	// 		e.preventDefault();
			
	// 	}
	// 	if($("#pass").val()!=$("#conf").val())
	// 	{
	// 		console.log("pass words dont match");
	// 		$("#name").css("backgroundColor","yellow");
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// 	else{
	// 		console.log($("#name").val()+'p');
	// 	}
	// 	console.log('exit');
		
	// });
	$('select').change(function(ev){
		console.log("in java");
		var b = $("#convert").val().toUpperCase();
		var a = $("#base").val().toUpperCase();
		if(a==b){
			$("#ter").html('1 '+a+' = 1 ' + b);
			return false;
		}
		console.log(b);
		var url="http://api.fixer.io/latest?base="+a;
		//$("#ex")[0].reset();
		$.getJSON(url,function(data){
			it=data.rates;
			for(j in it){
				console.log(j);
			}

			$("#ter").html('1 '+a+' = '+data.rates[b]+' ' + b);
			
		});

		ev.preventDefault();

	});
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
		$("#ne").click(function(r){
			console.log('inside new');
			var ur=' https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=b7f7e3b94ed34af9a9cd01663641e9ba';
			$.getJSON(ur,function(data){
				console.log('inside get');
				console.log(data);

			});
			console.log('out');
			r.preventDefault();
		});

});
	
