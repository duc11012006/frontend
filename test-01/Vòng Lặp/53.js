// let yourNumber = 208;
// let result = "Yes";

// while (yourNumber > 0) {
//     let digit = yourNumber % 10;
//     yourNumber = Math.floor(yourNumber / 10);

//     if(digit % 2 != 0) {
//         result = "No";
//         break;
//     }
// }

// console.log(result);


let yourNumber = 208;
let result = "Yes";

while(yourNumber > 0) {
    let digit = yourNumber % 10;
    yourNumber = Math.floor(yourNumber / 10);

    if(digit % 2 != 0) {
        result = "No";
        break;
    }
}

console.log(result);

