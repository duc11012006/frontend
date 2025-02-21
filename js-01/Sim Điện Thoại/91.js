let phone = "0383300893";
let result = "No";

phone = phone.replace(/\./g, ""); 
phone = phone.substring(phone.length - 3); 

let first = parseInt(phone[0]);  
let second = parseInt(phone[1]); 
let third = parseInt(phone[2]);  

if (first === second - 1 && first === third - 2) {
    result = "Yes";
}

console.log(result);
