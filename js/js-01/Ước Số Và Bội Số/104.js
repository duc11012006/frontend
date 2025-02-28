let x = 27;
let y = 18;
let result="";

let min = Math.min(x, y);

for(let i = min; i >= min; i--)
{
    if(x % i == 0 && y % i == 0)
    {
        result = i;
        break;
    }
}

console.log(`UCLN của ${x} và ${y} là ${result}`);