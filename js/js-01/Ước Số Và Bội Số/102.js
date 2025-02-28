let arrInt = [14, 12, 3, 5, 6];
let number = 4;
let result = "Không tồn tại";

for(let elm in arrInt) {
    if(arrInt[elm] !=0 && number % arrInt[elm] ==0) {
        result = "Tồn tại";
        break;
    }
}


console.log(result);