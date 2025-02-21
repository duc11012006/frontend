// let n = 2;
// let sum = 0;
// let result = "";

// for( let i = 1; i <= n; i++) {
//     sum += Math.pow(n, 2*i);
//     result += (n + "^" + 2*i) + " + ";
// }

// result = result.slice(0,-3) + " = " + sum;
// console.log(result);


let n = 2;
let sum = 0;
let result = "";

for(let i = 1; i <= n; i++) {
    sum += Math.pow(n, 2*i);
    result += (n + "^" + 2*i) + " + ";
}

result = result.slice(0,-3) + " = " + sum;
console.log(result);