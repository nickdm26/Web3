function drawGrid(){
	for(i = 0; i < 8; i++){
		
		for(k = 0; k < 8; k++){
			if(i%2 == 0){
				if(k%2 == 1){
					document.write("█");
				}else{
					document.write("&#160 ");
				}
			}else{
				if(k%2 == 0){
					document.write("█");
				}else{
					document.write("&#160 ");
				}
			}
			
			
			
		}
		document.write("<br>");
	}
	
}


drawGrid();

