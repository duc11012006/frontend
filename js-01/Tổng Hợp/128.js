let input = "Hue/2,13,4#Linh/5,3#Duy/55,36";
let result = "";

let arrInput = input.split(/#/);

for (let infoMember of arrInput) { // Duyệt qua từng thành viên
    let arrInfo = infoMember.split(/[/,]/);
    let maxScore = 0;

    for (let i = 1; i < arrInfo.length; i++) { // Tìm điểm cao nhất
        maxScore = Math.max(maxScore, parseInt(arrInfo[i]));
    }

    result += arrInfo[0] + ": " + maxScore + "\n"; // Kết quả từng thành viên
}

console.log(result);
