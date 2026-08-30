const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift bt apple'
}

for (const key in myobj) {
   
    console.log(myobj[key]);//find values
    // console.log(myobj);//for key 
    
}

const programming=["js","rb","py","java","cpp"]
for(const key in programming)
{
    console.log(programming[key]);
}


const map=new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('Fr',"France");
map.set('IN',"India");

for(const key in map){
    console.log(key);//dont print anything cz map is not iterable 
    
}
