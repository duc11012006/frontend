let arrInt = [2,-224,-16,2];
let result = "";

for(let i = 0; i < arrInt.length; i++) {
    if(arrInt[i] < 0) arrInt[i] *= -1;
}

for(let elm in arrInt) {
    result += arrInt[elm] + ", ";
}

result = result.substring(0, result.length -2);

result = "{" + result + "}";
console.log(result);