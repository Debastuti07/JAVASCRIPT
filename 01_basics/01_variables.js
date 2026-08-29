const accountID=144553;
let accountEmail="tuti@gmail.com";
var accountPass="12345";
accountCity="COB";
let accountState;
// accountID=2;// we cannot change const 

accountEmail="abc@gmail.com";
accountPass="121212";
accountCity="KOLKATA";
console.log(accountState);


//prefer not to use var because of issue in block scope and functional scope 

console.table([accountID,accountEmail,accountPass,accountCity,accountState]);
