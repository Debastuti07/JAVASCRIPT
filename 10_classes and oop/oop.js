const user={
    username:"tuti",
    password:123,
    logincount:8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`user name ${this.username}`);
        console.log(this);
        
    }
}
console.log((user.username));
// console.log(user.getUserDetails());
// console.log(this);



// const promiseOne=new Promise();//new=> constructor function 
// const date=new Date();


function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this;
}

const userone=new User("tuti",12,true);
const usertwo=new User("megha",100,false);//overwrite userone without "new" keyword
console.log(userone.constructor);
