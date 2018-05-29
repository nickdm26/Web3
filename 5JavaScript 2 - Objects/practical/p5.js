function Person(name, age){
  this.age = age;
  this.name = name;
  
  Person.prototype.Talk = function(){
    console.log("Hello my name is " + this.name + " and i am " + this.age + " years old");
  };
}

var p1 = new Person("Nick", 21);
var p2 = new Person("Mike", 18);
p1.Talk();
p2.Talk();