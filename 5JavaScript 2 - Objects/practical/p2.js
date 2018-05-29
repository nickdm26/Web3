function random(inputVal){
	return Math.floor((Math.random() * inputVal) + 1);
}

function fillArray(n){
	var numArray = [];
	for(var i = 0; i < n; i++){
		numArray.push(random(9));
	}
	return numArray;
}

var myArray = fillArray(12);
	document.write(myArray);
