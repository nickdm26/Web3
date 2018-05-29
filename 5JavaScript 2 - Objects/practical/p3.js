function random(inputVal){
	return Math.floor((Math.random() * inputVal) + 1);
}

function fillArray(c, r){
	var numArray = [];
	for(var i = 0; i < c; i++){
      var row = [];
		for(var k = 0; k < r; k++){
			
			row.push(random(9));
		}
      numArray.push(row);
	}
	return numArray;
}

var myArray = fillArray(3, 3);
	document.write(myArray);
