let n=5;
let result="";
let sum = 0;

for(let i = 1; i <=n; i++) {
  sum += Math.pow(n, 2*1);
  result += (n + "^" + 2*i) + " + ";
}
result = result.slice(0, - 3) + " = " + sum;

console.log(result);
