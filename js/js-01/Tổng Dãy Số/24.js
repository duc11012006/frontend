let n=7;
let result="";
let sum = 0;

for(let i = 1; i <=n; i++) {
  sum += Math.pow(i, 2);
  result += (i + "^2") + " + ";
}
result = result.slice(0, -3) + " = " + sum;

console.log(result);
