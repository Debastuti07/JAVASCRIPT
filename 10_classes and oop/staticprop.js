class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const megha=new User("megha")
console.log(megha.createId());



class Teacher extends User{
    constructor(username,email){
         this.email=email;
         super(username);
    }
}

const iphone=new Teacher("iphone","i@ph.com");
console.log(iphone.createId());
