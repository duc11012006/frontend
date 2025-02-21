let sentence = "hoc lap trinh tai zendvn";
let searchWord = "abc";
let result = -1;

let lengthSearchWord = searchWord.length; // Độ dài của từ cần tìm
let arrSentence = sentence.split(" ");    // Tách câu thành mảng các từ

for (let i = 0; i < arrSentence.length; i++) {
    let word = arrSentence[i];            // Lấy từng từ trong mảng
    if (lengthSearchWord <= word.length) {
        let tmp = word.slice(0, lengthSearchWord); // Cắt từ đầu đến độ dài từ cần tìm
        if (searchWord === tmp) {
            result = i + 1;               // Gán kết quả là vị trí (1-based index)
            break;
        }
    }
}

console.log(result);
