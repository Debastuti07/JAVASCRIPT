let score ="33abc"

console.log(typeof (score));
let valueInNumber=Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);//NaN =? not a number 
// for null=> 0 and for undefined => NaN
//"33"=>33
//"33abc"=>NaN

let isLOggedIn = 1 
let booleanIsLoggedIn=Boolean(isLOggedIn);
console.log(booleanIsLoggedIn);//true 

// 1=>true   0=>false   ""=> false  "tuti"=> true 

let someNumber=33

let stringNumber=String(someNumber)
console.log( stringNumber);
console.log(typeof stringNumber);


// ********* operations *********
let value =3 ;
let negValue =-value ;
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1="hello"
let str2="tuti"

let str3= str1 + str2
console.log(str3);
console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);//1
console.log(true);//true
console.log(+"");//0

let num1,num2,num3;
num1=num2=num3=2+2;


let gameCounter=100
gameCounter++;
console.log(gameCounter);
