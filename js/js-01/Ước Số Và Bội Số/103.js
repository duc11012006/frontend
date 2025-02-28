let arrInt = [14, 12, 3, 21, 6];
let number = 4;
let result ="Không tồn tại";

for(let elm in arrInt) {
    if(arrInt[elm] % number == 0 && arrInt[elm] % (number+1) == 0) {
        result = "Tồn tại";
        break;
    }
}


console.log(result);