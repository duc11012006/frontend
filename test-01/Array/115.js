let arrInt = [2,-224,-16,2,3];
let count = 0;
let result = "";

for(let elm in arrInt) if(arrInt[elm] < 0) count++;

let arrReturn = [arrInt.length - count];

let index = 0;
for(let elm in arrInt) {
    if(arrInt[elm] >=0) arrReturn[index++] = arrInt[elm];
}

for(let elm in arrReturn) {
    result += arrReturn[elm] + ", ";
}

result = result.substring(0, result.length - 2);
result = "{" + result + "}";

console.log(result);
