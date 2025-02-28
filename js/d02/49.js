// let year = 2024;
// let result = "Không là năm nhuận";

// if (year % 400  == 0 || (year % 4 == 0 && year % 100 != 0)){
//     result = "Năm nhuận";
// }

// console.log(result); 

// True: khi number chia het cho 3 va 4 nhung khong chia het cho 5
// Nguoc lai False 

let number = 2024;
let result =" False";

if (number % 3 ==0 && number % 4 ==0 && number %5 !=0) {
    result = "True";
}

console.log(result);