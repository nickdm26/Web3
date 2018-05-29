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

function oddNums(value, index, array){
  var returnVal = false;
  if(value%2 == 0){
    returnVal = true;
  }
  return returnVal;
}

var myArray = fillArray(12);
	document.write(myArray);
document.writeln("CAT<BR>");
var stuff = myArray.filter(oddNums);
document.writeln(stuff);
