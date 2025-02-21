let str = "luutruonghailan";
let key = "3633";
let result = "";

let endIndex = 0;
let startIndex = 0;

for(let i = 0; i < key.length; i++) {
    let currentNumber = parseInt(key[i]);
    endIndex += currentNumber;

    let word = str.slice(startIndex,endIndex);
    word = word.slice(0,1).toLocaleUpperCase() + word.slice(1);

    result += word + " ";
    startIndex = endIndex;
}
result = result.slice(0,result.length-1);

console.log(result);