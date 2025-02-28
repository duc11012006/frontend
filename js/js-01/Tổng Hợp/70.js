let number = 570;
let result = "Dữ liệu không hợp lệ";
let str_000 = "";
let str_00 = "";
let str_0 = "";
let dictionary = [
    "không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"
];

if (number >= 100 && number <= 999) {
    // 01 - Lấy chữ số hàng trăm, hàng chục, hàng đơn vị
    let digit_000 = Math.floor(number / 100); // 5
    let digit_00 = Math.floor(number / 10) % 10; // 7
    let digit_0 = number % 10; // 0

    // 02 - Hàng trăm
    str_000 = dictionary[digit_000] + " trăm ";

    // 03 - Hàng chục
    str_00 = dictionary[digit_00] + " mươi ";
    if (digit_00 == 0) str_00 = "linh ";
    if (digit_00 == 1) str_00 = "mười ";

    // 04 - Hàng đơn vị
    str_0 = dictionary[digit_0];

    result = str_000 + str_00 + str_0;
}

console.log(result);
