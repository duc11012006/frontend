let arrInt = [2,-4,-1,2];
let result = "";

for (let i = 0; i < arrInt.length; i++) {
  if (arrInt[i] < 0) arrInt[i] = -1;
}

for (let elem in arrInt) {
  result += arrInt[elem] + ", ";
}

result = result.substring(0, result.length-2); // 2, -1, -1, 2
result = "[" + result + "]";

console.log(result);