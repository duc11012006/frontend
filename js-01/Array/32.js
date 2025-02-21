let arrInt = [2, 4, 6, 2, 8];
let sum = 0;
let count = 0;
let result = "";

for (let i = 0; i < arrInt.length; i += 2) {
    if (arrInt[i] % 2 === 0) {
        result += arrInt[i] + " ";
        sum += arrInt[i];
        count++;
    }
}

if (count === 0) {
    console.log("Avg: 0");
} else {
    result = result.substring(0, result.length - 1);
    console.log(`Avg: (${result}) / ${count} = ${(sum / count).toFixed(1)}`);
}