var ob = {
	User: "Nick",
	Age: 21,
	LastName: "Muldrew"
};

var converted = JSON.stringify(ob);
localStorage.setItem("obj", converted);

var localOBJ = localStorage.obj;
var answer = JSON.parse(localOBJ);
document.writeln(answer.User + " " + answer.LastName + " " + answer.Age);