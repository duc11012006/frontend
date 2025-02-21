let arrInt = [1, 2, 7, 9, 2];
let result = "Không tồn tại";
let flagCheckExist = false;

for (let i = 1; i < arrInt.length - 1; i++) {
    if (arrInt[i - 1] + arrInt[i + 1] == arrInt[i]) {
        flagCheckExist = true;
        break;
    }
}

if (flagCheckExist == true) {
    result = "Tồn tại";
}

console.log(result);