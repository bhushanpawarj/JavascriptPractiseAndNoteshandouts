function sayHello(){
  console.log("Hello World");
}
sayHello();
//sending parameter
function sayHello(name){
  console.log("Hello World" +name );
}
sayHello("Bhushan");

function saysomething(name,dayoftime){
  console.log("Hello World" +name + "time is : "+ dayoftime );
}
saysomething("Bhushan","morning");

function add(a,b){
  return a+b
}
console.log(add(1,4));
// if you dont return anything or dont have return statment then it will return undefined 

var f= function foo(){
  console.log("Hello");
};
f();

//annonymous function ..you will loose function if assign diff value to f
var f= function(){
  console.log("Hello");
};
f();

//you can pass the function using by assignning it to the variable 
//For ex: 
var f=function (name){
  console.log("Hello "  + name);
  console.log(arguments);
}
var executor=function(fn,name){
  fn(name);
}
executor(f,"Bhushan");

//Object property can also have functions

//getters and setters
var person ={
  "firstname": "Bhushan",
  "lastname" : "Pawar",
  "getFullName": function(){
    return this.firstname+ " " + this.lastname;
  }
}

console.log(person.getFullName());

//Default Function Arguments

function f (name){
  console.log("Hello "  + name);
  console.log(arguments);   //default avialable
}
f("Bhushan");

//this argument is also available out of the box

//arguments is not an array ..it is actually a object

//No function overloadin gin javascript












