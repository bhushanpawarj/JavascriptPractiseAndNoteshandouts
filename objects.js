var myObject = {
};
myObject.prop = 'Hello'; //adding properties dynamically ..like a map key value pair
console.log(myObject);
myObject.prop2 = 123; //adding properties dynamically ..like a map key value pair
console.log(myObject);
console.log(myObject.prop)

//object literal
var myObj2={
  prop:"Hello",
  prop2:123,
  prop3:true
}
console.log(myObj2);
//all properies are accesible by anybody ..public in nature
console.log("accessing property that does not exists : "+myObj2.prop4);
//new porpoerties can be added directly
//objects can have methods in it

//objects properties can be accesses yusing sqr bracket as well
console.log("Accessing using sqr bracket notation : "myObj2["prop"]);
//sql notation used in following case 

var myObj2={
  prop:"Hello",
  prop2:123,
  "1":"One"
}

//you can not use a number as a key and access using "." notation ..so have to use sqr
//notation in this case shown below
//also used when property name is dynamic  ..if i need to enter the property on the basis of 
//some externam factor then have to use sqr notation
var myObj2={
  prop:"Hello",
  prop2:123,
  "1":"One"
}
console.log(myObj2.1);   //will throw error
console.log(myObj2["1"]);
//second example

var myObj2={
  prop:"Hello",
  prop2:123,
  "1":"One"
}

var propertyName="prop";
console.log(myObj2[propertyName]);

//"." notation is might be a optimized as engine knows what property need to be
//pulled bu its not the case with sqr notation

//dot and sqr notations can be interchaged 


//Nested Objects 

var myObj2={
  prop:"Hello",
  prop2:123,
  "objprop":{
      "innerprop":"propInner"
   }
}
console.log(myObj2.objprop.innerprop);

//=== uses the references of objects for equality check

//deleting the property from object
/*
making property value to undefined doesnot delete the object
use key word delete to remove porperty from object
*/
//For ex
var myObj2={
  "prop":"Hello",
  "prop2":123,
  "prop3" : true
}
console.log(myObj2);
delete myObj2.prop2;
console.log(myObj2);




































