// let arrInt = [14, 12, 3, 21, 6];
// let number   = 3;
// let result = "Không tồn tại";

// for (let elm in arrInt) {
//     if(arrInt[elm] % number == 0 && arrInt[elm] % (number + 1) == 0 ) {
//         result = "tồn tại";
//         break;
//     }
// }

// console.log(result);



let arrInt = [14, 12, 3, 21, 6];
let number   = 3;
let result = "Tồn tại";

for(let elm in arrInt) {
    if(arrInt[elm] % number == 0 & arrInt[elm] % (number + 1) == 0) {
        result = "Không tồn tại";
        break;
    }
}

console.log(result);