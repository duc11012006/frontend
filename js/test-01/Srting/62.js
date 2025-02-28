let str = "abcc";
let result = "false";

for (let i = 0; i <= str.length; i++) {
    if(!isNaN(parseInt(str[i], 10))){
        result = true;
        break;
    }
}

console.log(result);