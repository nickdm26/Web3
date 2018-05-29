function submitTask(e){
	e.preventDefault();
	var output = document.getElementById("output");
	var name = document.getElementsByName("contactName");
	var radioButtons = document.getElementsByName("gender"); 
	var checkBox = document.getElementsByName("terms");
	var selectChoices = document.getElementsByName("age");
	var nameCheck = false;
	var btnCheck = false;
	var boxCheck = false;
	var selectCheck = false;
	
	if(name[0].value.length > 0){
		nameCheck = true;
	}
	
	for(var i = 0; i < radioButtons.length; i++){
		if(radioButtons[i].checked){
			btnCheck = true;
		}
	}
	
	if(checkBox[0].checked){
		boxCheck = true;
	}
	
	if(selectChoices[0].value != ""){
		selectCheck = true;
	}
	
	console.clear();
	console.log(nameCheck);
	console.log(btnCheck);
	console.log(boxCheck);
	console.log(selectChoices[0].value);
	console.log(selectCheck);
	
	
	if(nameCheck && btnCheck && boxCheck && selectCheck){		
		output.innerHTML = "Hello " + name[0].value;
	}else{
		output.innerHTML = "";
	}
}




var form = document.getElementById("submitButton");
form.addEventListener("click", submitTask);