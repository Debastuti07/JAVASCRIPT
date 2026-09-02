const promiseNumOne=new Promise (function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
        
    },1000)
})

promiseNumOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("async 2 resolved");
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Tuti",email:"tuti@gmail.com"});
    },1000)
}).then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"megha",password:123})
        }
        else{
            reject('ERROR :Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
   console.log(username);
   
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected ");
    
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js",password:123})
        }
        else{
            reject('ERROR :js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try{
     const response=await promiseFive
    console.log(response);
   }
   catch(error){
     console.log(error);
     
   }
    
}
consumePromiseFive();



async function getAllusers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    console.log(data);
    }
    catch(error){
       console.log(error);
       
    }
    
}
getAllusers();




fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})