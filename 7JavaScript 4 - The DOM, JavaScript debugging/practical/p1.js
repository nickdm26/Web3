function countdown(num){
	var changeDiv = document.getElementById("divDisplay");
	var nums = "";
	for(i = num; i > 0; i--){
		nums += i + " ";
	}
	changeDiv.innerHTML = nums;
}





var input = prompt("Please enter a number");
countdown(input);
