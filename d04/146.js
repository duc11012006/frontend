// n = 123
// 3 - 1 = 2
let yourNumber = 10;
//let result = "";
let max = 0;
let min = 9;
while(yourNumber > 0){ 
    let digit = yourNumber % 10;
    
    if(digit > max) {
        max = digit;
    }

    if(digit < min ){
        min = digit;
    }
    yourNumber = Math.trunc( yourNumber/10);
}

//console.log(max) 
//console.log(min); // 3 - 1 = 2

let result = (max-min)
//console.log(result)

console.log(`${max} - ${min} = ${result}`);


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