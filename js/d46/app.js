const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


let elmLength = document.getElementById("length");
let inputLength = document.getElementById("input-length");
let checkboxNumbers = document.getElementById("checkbox-numbers");
let checkboxLetters = document.getElementById("checkbox-letters");
let checkboxSymbols = document.getElementById("checkbox-symbols");
let btnGenerate = document.getElementById("generate");
let elmBox = document.getElementById("result");
elmBox.innerText = "";


inputLength.addEventListener('click', function () {
    let length = inputLength.value;
    elmLength.innerText = length;
});


btnGenerate.addEventListener('click', function () {
    let length = inputLength.value;
    let isNumbers = checkboxNumbers.checked;
    let isLetters = checkboxLetters.checked;
    let isSymbols = checkboxSymbols.checked;

    let characters = [];

    if (isNumbers) characters = characters.concat(NUMBERS);
    if (isLetters) characters = characters.concat(LETTERS);
    if (isSymbols) characters = characters.concat(SYMBOLS);

    // console.log(characters)



    if (isNumbers == false && isLetters == false && isSymbols == false) {
        alert("Phải nhập đủ thông tin ")
    } else {

        let result = "";

        for (i = 1; i <= length; i++) {
            result += characters[randomNumber(0, characters.length - 1)]
        }

        elmBox.innerText = result;

        console.log(result);
    }
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


