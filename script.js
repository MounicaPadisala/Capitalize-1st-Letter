//creating a new string called "myNewString" from the mystring and converting 1st letter of each word to capital.
const myString = 'developer is developing new software product';
const myStringArr = myString.split(' ');
//console.log(myStringArr);
let myNewString='';
myStringArr.forEach(function (wordCap) {
  let cap = wordCap[0].toUpperCase() + wordCap.slice(1) + ' ';
  //console.log(cap);
  myNewString += cap;
  

}) 


console.log(myNewString); // 'Developer'

// Create a new string called "myNewString1" that holds the value of "Developer", using the value from "myString1"
const myString1 = 'developer';
const myNewString1 = myString1[0].toUpperCase() + myString1.slice(1);
console.log(myNewString1)
