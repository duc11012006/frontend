// let number = 2;
// let result = "";
// let sum = 0;

// for(let i = 1; i <= number; i++) {
//     sum += i;
//     result += i + "+";
// }

// result = result.slice(0,-3) + " = " + sum;
// console.log(result);

let n = 2;
let sum = 0;
let result = "";

for(let i = 1; i <= n; i++) {
    sum += i ;
    result += i + " + ";
}

result = result.slice(0,-3) + " = " + sum;
console.log(result);
