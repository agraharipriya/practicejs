const accountId= 1108
let accountEmail="priya@gmail.com"
var accountPassword="12345"
accountCity="Noida"   // u can use it but it will compliacted while using in the block so prefer not ot use 
let accountState;  // it will give undefined value 
var accountDate; // it will give undefined value 

// accountId =2  // not allowed to change
accountEmail="abc@gmail.com"
accountPassword="2121121"
accountCity="jaipur"
console.log(accountId); 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountDate]);

/*
prefer to not use var because of issue in block socpe and fucntional scope .
*/
