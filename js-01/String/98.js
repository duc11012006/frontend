let str = "abw=java;def=android;nfv=php";
let delimiter = ['=', ';'];

let length = 0;
for (let i = 0; i < str.length; i++) {
    let currentCharacter = str[i];
    for (let j = 0; j < delimiter.length; j++) {
        if (currentCharacter === delimiter[j]) length++;
    }
}

let result = new Array(length + 1);

let startIndex = 0;
let endIndex = 0;
let index = 0;

for (let i = 0; i < str.length; i++) {
    let currentCharacter = str[i];
    for (let j = 0; j < delimiter.length; j++) {
        if (currentCharacter === delimiter[j]) {
            endIndex = i;
            result[index++] = str.substring(startIndex, endIndex);
            startIndex = endIndex + 1;
        }
    }
}

result[index] = str.substring(endIndex + 1);

console.log(result);

