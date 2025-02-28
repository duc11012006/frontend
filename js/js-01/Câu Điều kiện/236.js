let score = 5;


let getscore= (score) => {
    let result = "";


    if (score >= 9.0) {
        result = `Xuất sắc`;
    }

    else if (score >= 8.0) {
        result = `Giỏi`;
    }

    else if (score >= 5.5) {
        result = `Khá`;
    }

    else if (score = 4.0) {
        result = `Trung bình`;
    }

    else if (score < 4.0) {
        result = `Yếu`;
    }

    return result;
}

console.log(getscore("Học sinh xếp loại :"  + score));