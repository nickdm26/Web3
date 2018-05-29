function countTxtInput(){
	var ele = document.getElementById("txtInput");
	var display = document.getElementById("divDisplay");
	display.innerHTML = vowelCounter(ele.value);
	
}

function vowelCounter(input){
	var vowels = "aeiouAEIOU";
	var vowelNum = 0;
	for(i = 0; i < input.length; i++){
		if(vowels.indexOf(input[i]) !== -1){
			vowelNum++;
		}		
	}
	return vowelNum;
}