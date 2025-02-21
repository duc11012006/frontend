let phone = "0589244567";
let result = "No";

phone = phone.replace(/\./g, "");
phone = phone.substring(phone.length - 3);

let firts = parseInt(phone[0]);
let second = parseInt(phone[1]);
let third = parseInt(phone[2]);

if(firts == second -1 && firts == third -2) {
    result = "Yes"
}

console.log(result)