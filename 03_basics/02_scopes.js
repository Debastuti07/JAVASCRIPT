
// var c=300; 
let a=100;
if(true){
   let a=10;
   const b=20;
   console.log("INNER",a);
  
   
//    var c=30;

}


console.log(a);
// console.log(b);
// console.log(c);


function one(){
     const username="tuti"

     function two(){
        const website="youtube"
        console.log(username);
        
     }
//    console.log(website);
   
     two();

}
one();

if(true){
    const username="megha";
    if(username==="megha"){
        const website=" youtube";
        console.log((username + website));
        
    }
    // console.log(website);//error
    
}
// console.log(username);//error

//++++++++++++++++++ interesting +++++++++++++++++++++++++


function addone(num){
    return num +1;
}
console.log(addone(5));


const addTwo=function(num)
{
     return num+2;
}
console.log(addTwo(8));