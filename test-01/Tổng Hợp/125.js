let str = "abbcccddddeeeeedcba";
let powerCharacter = str[0];
let powerTime = 1;
let result = "";

for(let i = 1; i <= str.length - 1; i++) {
    if(powerCharacter == str[i+1]) {
        powerTime++;
    }else {
        powerCharacter = str[i+1];
        if(powerTime >= result) result = powerTime;
        powerTime = 1;
    }
}

result = Math.max(powerTime, result);
console.log(result);