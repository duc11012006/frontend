let str = "luu truong hai lan";
let result = 0;

str = str.trim();
for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
    result++;
    }
}

console.log(result+1)