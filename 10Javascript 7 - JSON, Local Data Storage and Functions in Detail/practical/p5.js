var ob = {
	User: "Nick",
	Age: 21,
	LastName: "Muldrew"
};

var converted = JSON.stringify(ob);
localStorage.setItem("obj", converted);