function AddCSS(e){
	e.target.className = "underline";
}

function RemoveCSS(e){
	e.target.className = "";
	
}

var paragraphs = document.getElementsByTagName("p");
for(var i = 0; i < paragraphs.length; i++){
	paragraphs[i].addEventListener("mouseover", AddCSS);
	paragraphs[i].addEventListener("mouseout", RemoveCSS);
}
