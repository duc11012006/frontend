let arrInt = [1, 1, 1, 1];
let result = "";

arrInt.sort(); // [3 4 9]

for (let elm in arrInt) {
    result += arrInt[elm] + "-";
}

// 3-4-9-

result = result.slice(0, -1);

console.log(result);
