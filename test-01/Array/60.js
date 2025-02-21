let arrInt   = [1, 2, 3];
let yourNumber = 2;
let result = "Không tồn tại";
let flagExist = false;

for(let elm in arrInt) {
    if(arrInt[elm] == number) {
        flagExist = true;
        break;
    }
}

if (flagExist == true) {
    result = "Tồn tại";
}

console.log(result)