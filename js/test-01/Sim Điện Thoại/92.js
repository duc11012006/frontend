let phone = "0947388888";
let result = "No";

phone = phone.replaceAll(/\./g, "");

for( let i = 1; i < phone.length - 4; i++) {
    if(phone[i] == phone[i+1]
        && phone[i] == phone[i+2]
        && phone[i] == phone[i+3]
        && phone[i] == phone[i+4]
    ) {
        result = "Yes";
        break;
    }
}

console.log(result)