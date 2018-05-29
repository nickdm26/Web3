function submitTask(e){
	e.preventDefault();
	var val = document.getElementById("mail");
	console.log(val.value);
	var sp = document.getElementsByClassName("feedback");
	if(!val.validity.valid){		
		sp[0].innerHTML = "Please enter a valid email";
	}else{
		sp[0].innerHTML = "";
	}	
}

var form = document.querySelector("form");
form.addEventListener("submit", submitTask);