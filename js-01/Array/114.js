let arrInt = [1,2,3];
let max = Math.max(...arrInt);
let result = "";
for(let elm in arrInt) {
max = Math.max(max, arrInt[elm]);
}
for (let i = 0; i < arrInt.length; i++) {
arrInt[i] = max;
}
for (let elm in arrInt) {
result += arrInt[elm] + ", ";
}
result = result.substring(0, result.length-2);
result = "[" + result + "]";
console.log(result);