const tinderUser=new Object()

tinderUser.id="123abc";
tinderUser.name="Tuti";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
           firstname:"Debastuti",
           lastName:"De"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}

// const obj3={ obj1 , obj2 }
// const obj3=Object.assign({},obj1,obj2);//join two objects 

const obj3={...obj1,...obj2};
console.log(obj3);

const users=[
    {
    id:1,
    email:"tuti@gmail.com"
    },
    {
        id:2,
    email:"stuti@gmail.com"
    },
    {
       id:3,
    email:"megha@gmail.com"
    }
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true




const course ={
    courseNmae:"js in hindi",
    price:"999",
    courseInstructor:"megha"
}
// course.courseInstructor

const {courseInstructor: Instructor}=course

console.log(Instructor);

// {//json 
//     "name":"tuti",
//     "coursename":"js",
//     "price":"free"
// }