function makeArray(){	
	var numArray = [];
	for(var i = 1; i < 11; i++){		
		var num = {
			num1: "" + i,
			num2: "" + i*10
		};
		numArray[i] = num;
	}
	return numArray;	
}

var arr = makeArray();
document.write(JSON.stringify(arr));