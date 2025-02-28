let n=3;
let result="";
let sum = 0;

for(let i = 1; i <=n; i++){
    let part = 1;
    let strpart = "";

    for(let j = 1; j <= i; j++) {
        part *= j;
        strpart += j + "*";
    }

    strpart = strpart.slice(0, -1);

    sum += part;
    result += strpart + " + ";
}

result = result.slice(0, -3) + " = " + sum;
console.log (result)