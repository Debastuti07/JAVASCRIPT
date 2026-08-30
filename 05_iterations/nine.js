//reduce

const mynums=[1,2,3];

// const mytotal=mynums.reduce(function (acc,currentval){
//     console.log(`acc : ${acc} and current value ${currentval}`);
    
//     return acc+currentval;
// },0)

// console.log(mytotal);

const mytotalone=mynums.reduce((acc,currentval)=>{
    return acc+currentval;
},3)
console.log(mytotalone);


const shoppingCard=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"app dev",
        price:5999
    },
    {
        itemName:"web dev",
        price:3999
    },
    {
        itemName:"data science",
        price:12999
    }
]

const pricetopay=shoppingCard.reduce((acc,item)=>{
    return acc+item.price;
},0);
console.log(pricetopay);
