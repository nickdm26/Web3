var btn = document.getElementById("bu");

btn.onclick = function(){
	


	var x = document.getElementById("input").value;

	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22" +
	x + 
	"%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback";

	document.getElementById("output").innerHTML = "test </br>" + x;
	console.log(x);

	var jqxhr = $.getJSON( url, function(data) {
	  console.log( data);
	  //console.log( data.name);
	  document.getElementById("output").innerHTML = data.query.results.quote.Name;
	});
	jqxhr.done(function() {
		console.log( "success" );
	  });
	jqxhr.fail(function() {
		console.log( "error" );
	  });
	jqxhr.always(function() {
		console.log( "complete" );
	  });
};