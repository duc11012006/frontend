let phone = "0765743333";
let result = "No";

phone = phone.replaceAll(/\./g,"");

for(let i = 1; i < phone.length - 3; i++) {
    if(phone[i] == phone [i + 1]
        && phone[i] == phone[i + 2]
        && phone[i] == phone[i+3] ){
            
            result = "Yes";
            break;
        }
}

console.log(result)