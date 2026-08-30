const coding =["js","ruby","java","python","cpp"];

coding.forEach(function (item) {//callback function
    console.log(item);
    
})

coding.forEach((item)=>{//arrow function
    console.log(item);
    
})

function printMe(item)
{
    console.log(item);
    
}
coding.forEach(printMe);


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const mycoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"c++",
        languageFile:"cpp"
    }
]

mycoding.forEach((item)=>{
    
    console.log(item.languageName);
    
})