function httpGet(theUrl) //ignore the inner workings of this function
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function displayJSON(r){
	var jar = JSON.parse(r);
	for(var i = 0; i < jar.length; i++){
		document.write(jar[i].name + "<br>");
	}
	
}

var url = 'https://dl.dropboxusercontent.com/u/10089854/Web3/data.json'
var response = httpGet(url);
displayJSON(response);

console.log(response);
var jar = JSON.parse(response);
console.log(jar);


