function factorial(x){
	if(x == 0){
		return 1;
	}
	return x * factorial(x -1);
}


var num = prompt("What Factorial would u like to calculate?");

document.write(factorial(num));