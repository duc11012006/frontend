let score = 8.2;
let result = "";

if(score  >= 9.0) {
    result=" Xuất sắc"
}else if (score  >= 8.0){
    result=" giỏi";
}else if (score  >= 5.5) {
    result="khá";
}else if (score  >= 4.0) {
    result="trung bình";
}else if(score  < 4.0) {
    result=" Yếu";
}

console.log(" Học sinh xếp loại: " + result)