let str = "!03@#sa39C94#0036dh!@";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
        result += str[i];
    }
}

console.log(result);