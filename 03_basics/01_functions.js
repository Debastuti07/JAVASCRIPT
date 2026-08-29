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

function calculateCartPrice(val1,val2,...num1){//rest operator "..."
      return num1;
}

console.log(calculateCartPrice(200,400,500,600,700,800,900));

const user={
    username:"Megha",
    price:200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user);
handleObject({
    username:"tuti",
    price:399
});

const myNewArray=[200,400,600]
function returnSecondValue(getArray){
     return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,800,800]));

