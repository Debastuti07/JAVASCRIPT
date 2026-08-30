//for

for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
       console.log("5 is best number");
       
    }
    console.log(element);
    
}
// console.log(element); //throws error

for(let i=1;i<10;i++)
{
    console.log(`outer loop ${i}`);
    
    for(let j=1;j<10;j++)
    {
        // console.log(`inner loop ${j} and outer loop ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}


let myarr=["flash","batman","superman"]
for(let i=0;i<myarr.length;i++ )
{
    const element=myarr[i];
    console.log(element);
    
}


//break and continue

for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("detected 5");
        break;//exit from loop
    }
    console.log(i);
    
}



for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("detected 5");
        continue;//skip one print 
    }
    console.log(i);
    
}