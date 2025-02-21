let input = "!@x$3i*nc4*(hao";

let str = input.replaceAll(/[^a-zA-Z]/g, "");
let key = input.replaceAll(/\D/g, "");


let endIndex = 0;
let startIndex = 0;
let result = "";
let word = "";

for(let i = 0; i < key.length; i++) {
    endIndex + startIndex + parseInt(key[i]+"");

    word = str.slice(startIndex,endIndex);
    word = word.slice(0,1).toLocaleUpperCase() + word.slice(1);
    result += word + " ";
    startIndex = endIndex;
}
result = result.slice(0,result.length-1);

console.log(result);