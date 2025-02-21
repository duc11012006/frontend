let arrInt = [14, 2, 3, 5, 6];
let number = 14;
let result = "Không tồn tại";
let flagExist = false;

// A
for (let elm in arrInt) {
    if (arrInt[elm] == number) {
        flagExist = true;
        break;
    }
}

if (flagExist == true) {
    result = "Tồn tại";
}

console.log(result);