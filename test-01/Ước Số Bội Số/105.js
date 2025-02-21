let x = 5;
let y = 7;
let result = "";

let max = Math.max(x,y);

for(i = max; i <= x *y; i++) {
    if(i % x == 0 && i % y == 0) {
        result = i;
        break;
    }
}

console.log(`BCNN của ${x} và ${y} là ${result}`)