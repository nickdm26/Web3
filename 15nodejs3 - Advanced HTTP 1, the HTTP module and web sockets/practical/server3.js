var http = require("http");
var fs = require("fs");

//this module is necessary to process the data in the body of the HTTP POST request
var qs = require('querystring');

http.createServer(function(req, res) {
    
    //if the server gets a GET request 
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        
        //we serve the HTML file containing the form
        //notice that we create a stream to read the data from file and we pipe it to the response object
        fs.createReadStream("./public/index.html", "UTF-8").pipe(res);
        
    } else if (req.method === "POST") {

        var body = "";
        
        //for each incoming data chunk containing the data  in the form we concatenate it into an object named body
        req.on("data", function(chunk) {
            body += chunk;
        });

        req.on("end", function() {

            res.writeHead(200, {"Content-Type": "text/html"});
            
            //we parse the body of the HTTP POST request into an indexed data structure
            var postData = qs.parse(body);
            res.end(`


                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Greetings ${postData.first}!</h1>
                        <p>I have received an HTTP POST request with the following body</p>
                        <p>${body}</p>
                    </body>
                </html>

            `);
        });
    }

}).listen(3000);

console.log("Form server listening on port 3000");