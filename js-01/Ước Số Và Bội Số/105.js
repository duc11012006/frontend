let x = 5;
let y = 7;
let result=0;

let min = Math.max(x, y);

for(let i = max; i <= x * y; i++){
    if(i % x == 0 && i % y == 0)
    {
        result = i;
        break;
    }
}

console.log(`BCNN của ${x} và ${y} là ${result}`);