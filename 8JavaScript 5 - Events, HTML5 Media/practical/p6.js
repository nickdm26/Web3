function DisplayImage(){
	
}

function DisplayText(){
	
}

function ChooseDisplay(){
	var ele1 = document.getElementById("rdoImages");
	var ele2 = document.getElementById("rdoText");
	console.log("test");
	if(ele1.checked){
		alert("yup");
	}else{
		alert("text yup");
	}
}

var btn = document.getElementById("btnDemo");
btn.addEventListener("click", ChooseDisplay);

