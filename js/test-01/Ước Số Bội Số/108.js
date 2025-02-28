let number = 25;
let result = "";

let index = number - 1;
if(index % 2 == 0) index -= 1;

while(index > 0) {
    if(number % index == 0) {
        result = index;
        break;
    }
    index -=2;
}

console.log(`ớc lẻ lớn nhất của ${number} là ${result}`)