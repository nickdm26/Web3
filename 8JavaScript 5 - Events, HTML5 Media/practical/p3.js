function morning(){
	alert("good morning");
}

function bye(){
	alert("Bye");
}
	


var greeting = document.getElementById('par');
greeting.addEventListener('click', morning);
//greeting.addEventListener('mouseover', bye);