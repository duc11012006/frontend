let n = 2;
let sum = 0;
let result = "";

for(let i = 1; i <= n; i++) {
    sum += Math.pow(i,2);
    result += (i + "^2") +  " + ";
}

result = result.slice(0, -3) + " = " + sum;
console.log(result);