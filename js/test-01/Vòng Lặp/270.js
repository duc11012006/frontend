let score = 25485;
let result = "";
let point = 0;
let sum = 0;


// Tong cac chu so: sum     25485 => tong cac chua so 24
// Tim so nut result        24 % 10 = 4
// So sanh result voi 9

// while(score > 0){
//     let digit = score % 10;
//     score = Math.floor(score / 10);

//     sum += digit;
// }


// point = sum % 10;

//     if(point == 9){
//         result = "Bạn là người may mắn";
//     }
// console.log(`Số nút là ` + point + "\n" + result);



while(score > 0){
    let digit = score % 10;
    score = Math.floor(score / 10);

    sum += digit
}


point = sum % 10;

if(point == 9){
    result = "Bạn là người may mắn";
}

console.log(`Số nút là ` + point + "\n" + result);