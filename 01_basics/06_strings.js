const name="tuti";
const repoCount =50;
// console.log(name+repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String ('tuti  megha');
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.split('-'));

const newString=gameName.substring(0,4);
console.log(newString);


const anotherString=gameName.slice(-8,4);
console.log(anotherString);


const newStringOne="   megha   ";
console.log(newStringOne);
console.log(newStringOne.trim());//ignores whitespace 

const url="https://megha.com/debastuti%de";
console.log(url.replace('%','-'));

console.log(url.includes('megha'));


