window.onload= function(){
	var writeHere = document.getElementById("whatsNew");
	if(localStorage.HaveBeenHere != null){
		console.log("New");
	}else{
		console.log("Not New");
	}
	localStorage.setItem("HaveBeenHere", "Yes");
	//localStorage.HaveBeenHere = null;
	
}

