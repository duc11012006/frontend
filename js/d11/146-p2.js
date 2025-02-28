// n = 14523
// max = 5
// min = 1
// digit = 3 
// min*digit - max = 
// 1*3 - 5 = -2

let yourNumber = 14523;
let max = 1;
let min = 9;
let last = yourNumber % 10;


while(yourNumber > 0){
    let digit = yourNumber %10;
    if(digit > max ){
        max = digit;
    }
    if(digit < min){
        min = digit;
    }
    yourNumber = Math.trunc(yourNumber/10);

}
let result = ((min*last)-max)
//console.log(result)
// console.log(max)
// console.log(min)
// console.log(`Last: ${last} `);

console.log(`${min} * ${last} - ${max} = ${result}`)



//let yourNumber = 10;
//let result = "";
// let max = 0;
// let min = 9;
// while(yourNumber > 0){ 
//     let digit = yourNumber % 10;
    
//     if(digit > max) {
//         max = digit;
//     }

//     if(digit < min ){
//         min = digit;
//     }
//     yourNumber = Math.trunc( yourNumber/10);
// }

//console.log(max) 
//console.log(min); // 3 - 1 = 2

// let result = (max-min)
// //console.log(result)

// console.log(`${max} - ${min} = ${result}`);


// console.log(`Total: ${result} digits`);

// let x = 100;
// let y = 6;
// let z = 10;

// let max = 0;

// if(x > max) {
//     max = x;
// }

// // max = 5
// if(y > max) {
//     max = y;
// }

// if(z> max) {
//     max=z
// }


// console.log(max)