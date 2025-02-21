let arrInt = [1,2,3,2];
let result = "";

arrInt.sort();
for(let elm in arrInt) {
    result += arrInt[elm] + "-"
}

result = result.slice(0,-1);
console.log(result)