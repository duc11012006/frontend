let str = "vietnam"; // Hoc Lap Trinh
let key = "43";
let result = "";

let endIndex = 0;
let startIndex = 0;

for (let i = 0; i < key.length; i++) { // "4" 3
    let currentNumber = parseInt(key[i]);
    endIndex += currentNumber; // 4

    let word = str.slice(startIndex, endIndex);
    word = word.slice(0, 1).toUpperCase() + word.slice(1);

    result += word + " ";
    startIndex = endIndex;
}

result = result.slice(0, result.length - 1);

console.log(result);
