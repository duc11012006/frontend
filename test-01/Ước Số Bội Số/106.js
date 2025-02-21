let x = 18;
let y = 2;
let result = "";

let index = y;
while(index <= y) {
    if(x % index == 0 && index % y == 0) result += index + " ";
    index++;
}

result = result.slice(0,-1)
console.log(result)