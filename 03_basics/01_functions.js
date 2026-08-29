function sayMyName(){
    console.log("M");
    console.log("E");
    console.log("G");
    console.log("H");
    console.log("A");
}
sayMyName ();

// function addTwoNumbers(a,b){
//     console.log( a+b);
    
// }
function addTwoNumbers(a,b){
//    let result=a+b;
//    return result;
      return a+b;
    
}

addTwoNumbers(2,5);//7
addTwoNumbers(2,'5');//25
addTwoNumbers(2,'A');//2A
addTwoNumbers(2,null);//2

const result=addTwoNumbers(3,5);
console.log("result",result);

function loginUserMessage(username){
    if(!username /*username===undefined*/){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in `;
}

console.log(loginUserMessage());