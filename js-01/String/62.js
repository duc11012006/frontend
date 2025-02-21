let str = "%$1^(|";
let check = false;

for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
        check = true;
        break;
    }
}

console.log(check);