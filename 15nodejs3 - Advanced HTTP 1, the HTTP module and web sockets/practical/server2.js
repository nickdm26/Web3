var http = require('http');
var fs = require("fs");

var server = http.createServer();
server.on('request', function(request, response){
	var body = [];
	
	
	request.on('data', function(chunk){
		body.push(chunk);
	});
	
	request.on('end', function(){
		body = Buffer.concat(body).toString();
		//console.log(body);
	});
	
	request.on('error', function(err){
		console.log(err.stack);
		console.log("error");
	});
	
	
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.setHeader('X-Powered-By', 'bacon');
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'X-Powered-By': 'bacon'
	});
   
   // Send the response body as "Hello World"
   //response.write(body);
   //response.end('<h1>Hello World\n</h1>');
   
	response.write('<html>');
	response.write('<body>');
	response.write(`This is an HTTP response to an HTTP ${request.method} request pointing to URL path ${request.url}`);
	response.write('<h1>Hello, World!</h1>');
	response.write('</body>');
	response.write('</html>');
	response.end();

   console.log(request.method);
   console.log(request.url);
});


server.listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');