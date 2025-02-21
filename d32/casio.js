let inputNumberOne = document.getElementById('number-one');
let inputNumberTwo = document.getElementById('number-two'); // inputNumberTwo -> .value
let elmResult = document.getElementById('result'); // h1-h6 span div noi dung  elmResult   .innerText

let btnSum = document.getElementById('btn-sum');        // btn
let btnSubtract = document.getElementById('btn-subtract');
let btnMultiply = document.getElementById('btn-multiply');
let btnDivide = document.getElementById('btn-divide');


// let validateInputs = () => {
//     let numberOne = parseFloat(elmnumberOne.value);
//     let numberTwo = parseFloat(elmnumberTwo.value);

//     if (isNaN(numberOne) || isNaN(numberTwo)) {
//         result.textContent = 'Please enter valid numbers';
//         return false;
//     }
//     return { numberOne, numberTwo };
// };

// btnSum.addEventListener('click', () => {
//     elmResult.innerText = numberOne + numberTwo
//     elmResult.innerText = numberOne - numberTwo
//     elmResult.innerText = numberOne * numberTwo
//     elmResult.innerText = numberOne / numberTwo
// });

btnSum.addEventListener('click', () => {
    caculate("+")
});


btnSubtract.addEventListener('click', () => {
    caculate("-")
});


btnMultiply.addEventListener('click', () => {
    caculate("x")
});

btnDivide.addEventListener('click', () => {
    caculate("/")
});

function caculate(math) {
    let numberOne = parseInt(inputNumberOne.value);
    let numberTwo = parseInt(inputNumberTwo.value);
    switch (math) {
        case "+":
            result = numberOne + numberTwo
            break;
        case "-":
            result = numberOne - numberTwo
            break;
        case "*":
            result = numberOne * numberTwo
            break;
        case "/":
            result = numberOne / numberTwo
            if (numberTwo == 0) {
                error = 'không thể chia cho 0'
                result = error

                elmResult.innerText = error
            }
            break;
    }

    elmResult.innerText = "result: " + numberOne + math + numberTwo + "=" + result
    console.log(math);
    console.log("%d %s %d = %d", numberOne, math, numberTwo, result);
}

// numberOne.addEventListener(, () => {
//     numberOne.value = '';
//     result.textContent = 'Result: ...';
// });

// numberTwo.addEventListener('', () => {
//     numberTwo.value = '';
//     result.textContent = 'Result: ...';
// });