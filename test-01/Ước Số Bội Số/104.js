let x = 25;
let y = 10;
let result = "";

let min = Math.min(x,y);

for(let i = min; i >= 1;i--) {
    if(x % i == 0 && y % i == 0) {
        result = i;
        break;
    }
}

console.log(`ULCN của ${x} và ${y} là ${result}`)