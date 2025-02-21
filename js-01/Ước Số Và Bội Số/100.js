let number = 29;
let result = "";

let index = 0;
while (number * index < 100)
{
    result+= (number * index) + " ";
    index++
}


result = result.slice(0, -1);
console.log(`Bội nhỏ hơn 100 của ${number} là ${result}`);