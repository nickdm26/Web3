function displayObjectInTable(O){
	//alert("hi");
	var fd = document.getElementsByTagName("body")[0];
	var newTable = document.createElement("table");
	var newRow = document.createElement("tr");
	var keyTD = document.createElement("td");
	//for(k in O){
	//	var nwString = "" + k + " " + O[k] + " ";
	//	keyText = document.createTextNode(nwString);
	//}
	//keyTD.appendChild(keyText);	
}

function objectDemo(){
	
	displayObjectInTable(match);
}


var match =
{
	team1: "All Blacks",
	team2: "Springboks",
	score1: 21,
	score2: 11
}