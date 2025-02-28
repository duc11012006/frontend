let input = "!@x$3i=nc4*(hao";

let str = input.replaceAll(/[^a-zA-Z]/g, ""); // coychicocodunong
let key = input.replaceAll(/\D/g, "");        // 213235

let startIndex = 0;
let endIndex = 0;
let word = "";
let result = "";

for (let i = 0; i < key.length; i++) {
    endIndex = startIndex + parseInt(key[i]);

    word = str.slice(startIndex, endIndex);
    word = word.slice(0, 1).toUpperCase() + word.slice(1);
    result += word + " ";
    startIndex = endIndex;
}

result = result.slice(0, result.length - 1);

console.log(result);
