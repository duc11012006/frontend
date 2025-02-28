let arrInt = [2, 4, 6, 2, 8];
let max    = arr [0];
let min    = arr [0];
let total  = arr [0];

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current > min) min = current;
    if (current < max) max = current;
    total+=current;
}

let result = (total - min - max) / (arr.length - 2);

console.log(result)