//allow pasting
//one way to declare and assign variable
var val = 42;
//No pre declaration of type required to create a variable 
//second way to declare
//var value;
//value=42;
/*Primitive types
1.Number --> double precision 64 bit ..don't have int everything is floating point double precisionnumbers
2.String  -->16 bit characters ..no char datatype in js ..all are strings
3.boolean -->true or false
*/
//primitive types ex : 1. Number
var a = 10;
console.log(a);
var b = 10;
console.log(b);
var c = a + b;
console.log(c);


//primitive types ex : 1. String
var d="Hello";
var  e=true;
console.log(d);
console.log(e);

//no type information associated with the variable..var can hold any value at any point of time
//its called loose/weak typing
//for ex
a="Hello Javascript";  //was number first on the first line of code
console.log(a);

//declaration : to ask compiler to create placeholder and give it a name
//ex:
var val;
//definition : assign a value to the variable
//ex:
val=42;

//in js: when variable is declared ...even thought you dont assign value javascript assigns the value undefined 
//undefined is a special type with only one possible  value i.e undefined 

//for ex:
var f; //f will be undefined ..undefined is a type with only one value i.e undefied 

//null type
//same as undefined  : null is a type with only one value i.e null
//for ex : 
var g;
console.log(g);   //g is undefined 

g=null;
console.log(g); //g is null

//null is like NA value ...and undefined is like a empty form field(analogy)
//value is empty ..explicitly assingi t to null
//undefined is like you forgot to give a value and null is like its not applicable at that point of time

//So below are the primitve type according to ES5
/*
1.Number
2.String
3.Boolean
4.undefined
5.null
*/

//Types got added in ES6 are as follows
/*
6.Symbol
*/

//Variables and Types :Summary
/*
1.No need to declare the type
2.Same variable can be assigned to the different types
3.No scoping information is tied with the variable like public private etc.
4.Variables and Values can be interrogated
*/
//What do you mean by "Variables and Values can be interrogated"
/*
-No way of knowing the type in js 
-have to figure that out dynamically
-use typeos(value/variablename)
*/
var z;
console.log(typeof z);
z=10;
console.log(typeof z);
z="hello";
console.log(typeof z);
z=true;
console.log(typeof z );
z=null;
console.log(typeof z); //null is printed as object and its a bug in javascript

//Automatic type conversion : Type Coeresion
//for ex when you try to perform + on number and string so number is converted into string 

/*
== vs ===

*/
a=10;
b="10";
if(a==b){
  console.log("true");
}
else{
  console.log("false");
}

if(a===b){
  console.log("true");
}
else{
  console.log("false");
}

//0 is false and any non zero number is true
//empty string is false and any other string is true in javascript
//for ex
a=0;
if(a){
  console.log("true");
}
a=-10;
if(a){
  console.log("true");
}
a=10;
if(a){
  console.log("true");
}
b=""
if(a){
  console.log("true");
}
b="Hello";
if(a){
  console.log("true");
}

var c=undefined

if(c){
  console.log("true");
}
//values of all types have an associated boolean value like shown in above examples










