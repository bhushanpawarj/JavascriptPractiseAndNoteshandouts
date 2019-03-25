var myArray=[1,2,3];
console.log(myArray[0])
console.log(myArray[5])  //index doesnot exists ..it will return undefined
myArray[3]="test";
console.log(myArray);
console.log(myArray.length);
//an array is underneath an object 
//like a object with special properties
//array indexes are bacially thekeys in the object
//For ex
console.log(myArray["0"]);  //type coersion ..is getting conversion from string to int 
//as numbers can not be usesd as key so we can not use "." operator

myArray[400]=12;
console.log(myArray);
console.log(myArray.length); // length is basically the last index+1

myArray["bjp"]="sdf"; 
//is valid 
//but the length will still be 401 

myArray.push(4);    
myArray.pop() ;//last elemenbt is removed 
myArray.shift(); // remove from front
myArray.unshift(12); //add element in the front

//for each loop for array 
var myArray=[1,2,3];
myArray.forEach(function (data,index,arrayItself){
  console.log("index is : " + index + " value is  : " + data + "array is : " + arrayItself);
})

