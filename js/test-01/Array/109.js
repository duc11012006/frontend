let arrInt = [19,0,19];
let max = arrInt[0];

for(let elm in arrInt) {
    max = Math.max(max, arrInt[elm]);
} 

console.log(`Max: ${max}`);