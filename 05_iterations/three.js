//for of

// ["","",""]
// [{},{},{}]


const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}

const greeting="hello world";
for(const greet of greeting)
{
    console.log(greet);
    
}



//Maps=> holds uniques value and follows the order 
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('Fr',"France");
map.set('IN',"India");

console.log(map);


for(const [key,value] of map){
    console.log(key,':-', value);
}

const myobj={
    "game1":"NFS",
    "game2":"Spiderman"
}

// for(const [key,val] of myobj)
// {
//     // console.log(key,':-',val);//object is not iterable like that 
    
// }