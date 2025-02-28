let number = 1;
let result ="";

let index = 1;
while(index <= number) {
    if (number % index == 0) result += index + " ";
    index++;
}

result= result.slice(0, -1)
console.log(`Ước số của ${number} là ${result}`);
