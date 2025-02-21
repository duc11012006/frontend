let yourNumber = 18;
let result = "Không giải mã được";
let yourLanguage = Math.floor(yourNumber/10);
let yourDate = yourNumber % 10 ;

let arrVietname = ["0","1","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","CN",];
let arrEnglish = ["0", "1", "Mon",   "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

if((yourLanguage == 1 || yourLanguage || 2) && yourDate >= 2 && yourDate <= 8) {
    if(yourLanguage == 2) {
        result = arrVietname[yourDate];
    }else if (yourLanguage == 1) {
        result = arrEnglish[yourDate];
    }
}

console.log(result)