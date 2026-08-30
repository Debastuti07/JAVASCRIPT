const userEmail=[];//assume that the value is true +> called truthy value ... but if it contains " " -> assume it is false 

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("dont have user email");
    
}


// falsy values 

// false, 0, -0, BigInt 0n, "",null , undefined, Nan

//truethy values
// [], "0",'false'," ",{},function(){}

if(userEmail.length===0){
    console.log("Array is empty");
    
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
   console.log("object is empty");
   
}


//Nullish Coalescing Operator(??):null undefined

let val1;
// val1=5??10 //return 5
// val1=null??10;//return 10
// val1=undefined??15//return 15

val1=null?? undefined//undefined


console.log(val1);


//ternary operator

// condition ? true : false 

const iceTeaPrice=100;
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");

