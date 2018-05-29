var Entrees;
var Soups;
var vegeterian = false;

function hideFish(){
	var ele = $(".fish");
	ele.parent().parent().detach();
}

function changeHamburger(){
	var ele = $(".hamburger");
	ele.replaceWith("<li class='replacedHamburger'>portobello mushrooms</li>");
	$(".replacedHamburger").parent().parent().addClass("leaf");
}

function changeMeat(){
	$(".meat").replaceWith("<li class='replacedMeat'>Tofu</li>");
	$(".replacedMeat").parent().parent().addClass("leaf");
}

function manager(){
	if(!vegeterian){
		Entrees = $(".left_col").clone();
		Soups = $(".right_col").clone();
	}
	hideFish();
	changeHamburger();
	changeMeat();
	vegeterian = true;
}

function revert(){
	if(vegeterian){
		$(".left_col").replaceWith(Entrees);
		$(".right_col").replaceWith(Soups);
	}
	vegeterian = false;
}

$(document).ready(function(){
	console.log("ready");
	Entrees = $(".left_col").clone();
	Soups = $(".right_col").clone();
	$("#btnVegetarian").click(manager);
	$("#btnRestore").click(revert);
	
});