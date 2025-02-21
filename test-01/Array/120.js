let arrInt = [4, 3, 1, 2];
let min    = arrInt[0];
let max    = arrInt[0];
let total  = arrInt[0];

for(let i = 1; i < arrInt.length; i++) {
    let current = arrInt[i];
    if(current < min) min = current;
    if(current > max) max = current;
    total += current;
}

let result = (total - min - max) / (arrInt.length - 2);

console.log(result);