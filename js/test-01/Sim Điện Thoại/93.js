let phone = "0818999999";
let result = "No";

yourNumber = yourNumber.replace (/\./g, "");
yourNumber = yourNumber.substring(yourNumber.length - 6);

if(yourNumber % 111111 == 0) {
    result = "Yes";
}

console.log(result)