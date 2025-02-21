let n = 10;
let result = '';

for (let i = n; i >= 1; i--) {
  result += i;
  if (i > 1) {
    result += ' x ';
  }
}

console.log(`${result} = ${n * (n - 1) * (n - 2) * 1}`);