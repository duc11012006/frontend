let n = 2;
let result = "";
let multi = 1;

for( let i = 1; i >= 1; i++) {
    multi *= i;
    result += i + " x ";
}

result = result.slice(0,-3) + " = " + multi;
console.log(result);
