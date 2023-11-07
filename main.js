'use strict'
alert('Welcome to the Cost Calculator for train tickets!');
const km = Number (prompt ('Insert the distance you want to travel in Km'));
const age = Number (prompt ('Insert your age'));
console.log(km);
console.log(age);

if(!isNaN(km) && !isNaN(age)){
    console.log(km +'is a number');
    console.log(age +'is a number');
}else{
    console.log('Error');
}

let nKm =parseInt(km);
let nAge =parseInt(age);

 let basePrice = (nKm *= 0.21); // default

 if (nAge < 18){
    basePrice = (basePrice - ((basePrice*20)/100))
} else if(nAge >= 65){
    basePrice = (basePrice - ((basePrice*40)/100))
} 
// else {
//     console.log(basePrice)
// };

 alert(basePrice.toFixed(2));
 cost.innerHTML = basePrice.toFixed(2)