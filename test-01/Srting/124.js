let input = "dksds!03@#8330#@8983hndh!@";
let result = "";

for(let i = 0; i <str.length;i++) {
    if(!isNaN(parseInt(str[i],10))){
        result += str[i];
    }
}

console.log(result)