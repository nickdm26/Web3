function buttonClicked(e){
	//console.log("test");
	var request = new XMLHttpRequest();
	request.open('GET', 'https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical/images/' + e.id + '.svg');
	
	request.onreadystatechange = function(){
		if((request.readyState===4) && (request.status===200)){
			var str = e.id;
			var Num = str.slice(str.length -1);
			console.log(Num);
			var icon = document.getElementById("icon" + Num);
			icon.innerHTML = request.responseText;
			
			
			
		}		
	}	
	request.send();
}