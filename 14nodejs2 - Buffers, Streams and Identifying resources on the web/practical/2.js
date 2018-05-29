var crypto = require('crypto');
var fs = require('fs');
var hash = crypto.createHash('sha1');

var input = fs.createReadStream('longTextFile.txt');

input.on("data", function(chunk){
	hash.update(chunk);
});

input.on("end", function(){
	console.log(hash.digest('hex'));
});