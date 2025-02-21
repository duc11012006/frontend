// let yourNumber = 1;
// let sum = 0;
// let result = "";

// while(yourNumber > 0) {
//     let digit = yourNumber % 10;
//     yourNumber = Math.floor(yourNumber / 10);


//     sum += digit;
//     result = digit + " + " + result;
// }

// result = result.slice(0,-3);

// console.log(result);

let yourNumber = 12;
let sum = 0;
let result = "";

while(yourNumber > 0){
    let digit = yourNumber % 10;
    yourNumber = Math.floor(yourNumber / 10);

    sum += digit;
    result = digit + " + " + result;
}

result = result.slice(0,-3);
console.log(result);