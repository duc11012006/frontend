// let yourNumber = 279;
// let result = "Yes";

// let digit = yourNumber % 10;
// yourNumber = yourNumber / 10;

// while(yourNumber > 0) {
//     let currenDigit = yourNumber % 10;
//     yourNumber = Math.floor(yourNumber / 10);

//     if(currenDigit >= digit){
//         result = "No";
//         break;
//     }

//     digit = currenDigit;
// }

// console.log(result);

let yourNumber = 111;
let result = "Yes";

let digit = yourNumber % 10;
yourNumber = yourNumber / 10;

while(yourNumber > 0) {
    let currenDigit = yourNumber % 10;
    yourNumber = Math.floor(yourNumber / 10);

    if(currenDigit >= digit) {
        result = "No";
        break;
    }
    digit = currenDigit;
}

console.log(result);