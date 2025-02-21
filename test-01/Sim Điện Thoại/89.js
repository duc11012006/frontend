let phone = "0947597878";
let result = "No";

phone = phone.replace(/\./g, "");
let tmp = parseInt(phone.substring(phone.length-2));

if( tmp == 38 || tmp == 78){
    result = "Yes"
}

console.log(result)