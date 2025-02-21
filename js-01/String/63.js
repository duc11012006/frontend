let str = " hai ";
let result = 0;

str = str.trim();
for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
        result++;
    }
}

console.log(result + 1);