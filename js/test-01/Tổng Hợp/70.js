let number  = 100;
let result  = "Dữ liệu không hợp lệ";
let str_000 = "";
let str_00  ="";
let str_0   = "";

let dictionary = ["Không", "Một","Hai","Ba","Bốn","Năm","Sáu","Bảy","Tám","Chín"];

if(number >= 100 && number <= 999) {
    let digit_000 = Math.floor(number / 100);
    let digit_00  = Math.floor(number / 10) % 10;
    let digit_0   = number % 10;
}