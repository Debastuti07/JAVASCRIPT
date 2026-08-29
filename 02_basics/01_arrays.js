//array

const myArr=[0,1,2,3,4,5];
const myHeros=["megha","tuti"];

console.log(typeof myArr);//object 

const myArray2=new Array(1,2,3,4);

console.log(myArr[0]);

//array method 
myArr.push(6);//add the element in the last 
myArr.push(7);
myArr.pop();//remove last element 

console.log(myArr);

myArr.unshift(9)//insert into the first position
console.log(myArr);

myArr.shift();//remove theat first element 
console.log(myArr);
 
console.log(myArr.includes(9));//false

const newArr=myArr.join();
console.log(myArr);
console.log(newArr);
console.log( typeof newArr);


//slice ,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

//slice just take a carbon copy froom index and cannot use the last index 
// but splice just cut the whole part from the mother array and also give the last index of the splice margin 