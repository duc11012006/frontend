let phone = "0979.229.139"; 
let result = "No";

phone = phone.replace(/\./g, ""); 
let tmp = parseInt(phone.substring(phone.length - 2)); 

if (tmp === 39 || tmp === 79) result = "Yes";

console.log(result);
