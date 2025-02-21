let number = 144;
let result = "";

let index = 2;
while(index <= number) {
    if(number % index == 0 )  result += index + " ";
    index+=2;
}

result = result.slice(0,-1);
console.log(`Ước số chẵn của ${number} là ${result}`)