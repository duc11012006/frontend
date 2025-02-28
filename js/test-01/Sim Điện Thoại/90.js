let phone = "0948531779";
let result = "No";

phone = phone.replace(/\./g, "");
let tmp = parseInt(phone.substring(phone.length-2));

if( tmp == 39 || tmp == 79){
    result = "Yes"
}

console.log(result)