let str = "php/12/java/140/frontend/30";
let delimiter = "/";

let length = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) length++;
}

let result = new Array(length + 1);

let startIndex = 0;
let endIndex = 0;
let index = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
        endIndex = i;
        result[index++] = str.substring(startIndex, endIndex);
        startIndex = endIndex + 1;
    }
}

result[index] = str.substring(endIndex + 1);

console.log(result);
