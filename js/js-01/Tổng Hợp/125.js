let str = "cdddddeeffffdcba";
let powerCharacter = str[0];  // ký tự đầu tiên
let powerTime = 1;            // độ dài chuỗi liên tiếp ban đầu
let result = 0;               // kết quả độ dài lớn nhất

for (let i = 0; i < str.length - 1; i++) {
    if (powerCharacter == str[i + 1]) { // kiểm tra ký tự hiện tại với ký tự kế tiếp
        powerTime++;
    } else {
        powerCharacter = str[i + 1];
        if (powerTime >= result) result = powerTime;
        powerTime = 1; // đặt lại powerTime
    }
}

result = Math.max(powerTime, result);

console.log(result);
