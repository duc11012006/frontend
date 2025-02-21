let sentence = "lap trinh php tai zendvn la chuong trinh";
let searchWord = "abc";
let result = -1;

let lengthSearchWork = searchWord.length;
let arrSentence = sentence.split(" ");

for(let i = 0; i < arrSentence.length; i++) {
    let word = arrSentence[i]

    if(lengthSearchWork <= word.length) {
        let tmp = word.slice(0, lengthSearchWork);
        if(searchWord === tmp) {
            result = i + 1;
            break;
        }
    }
}

console.log(result);