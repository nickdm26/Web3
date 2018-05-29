function ajaxRequest(){
	console.log("test");
	var request = new XMLHttpRequest();
	request.open('GET', 'https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical2/athletes.json');
	
	request.onreadystatechange = function(){
		if((request.readyState===4) && (request.status===200)){
			//console.log(request.responseText);
			var requestTXT = JSON.parse(request.responseText);
			var inputTxt = document.getElementById("userInputText").value;
			var output = document.getElementById("output");
			if(inputTxt in requestTXT){
				output.innerHTML = "Are you thinking about " + inputTxt + " " + requestTXT[inputTxt] + "?";
			}else{
				output.innerHTML = "sorry! I do not know that athlete";
			}
		}		
	}
	
	request.send();
}