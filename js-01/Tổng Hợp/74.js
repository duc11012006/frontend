let str = "php/12/java/14";
let strArr = str.split("/");  // Tách chuỗi thành mảng
let max = strArr[1];          // Lấy giá trị đầu tiên làm mốc so sánh

let length = strArr.length;
for (let i = 3; i < length; i += 2) { // Duyệt các giá trị số (vị trí lẻ)
    let time = parseInt(strArr[i]);  // Chuyển giá trị sang số nguyên
    if (time > max) {
        max = time; // Cập nhật giá trị lớn nhất
    }
}

let result = "";
for (let i = 1; i < length; i += 2) { // Duyệt lại các giá trị số
    let time = parseInt(strArr[i]);
    if (time == max) {
        result += strArr[i - 1] + ": " + time + "\n"; // Kết quả chuỗi
    }
}

console.log(result);
