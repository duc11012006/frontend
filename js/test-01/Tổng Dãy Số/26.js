let n = 3;
let sum = 0;
let result = "";

for(let i = 1; i <= n; i++) {
    
    let part = 1;
    let strpart = "";

    for(let j = 1; j <= n; j++) {
        part *= j;
        strpart += j + " * ";
    }
    strpart = strpart.slice(0,-1);

    sum += part;
    result += strpart + " + ";
}

result = result.slice(0,-3) + " = " + sum;
console.log(result);