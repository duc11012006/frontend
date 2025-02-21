let numberOne = document.getElementById(`number-one`);
let numberTwo = document.getElementById(`number-two`);
let result = document.getElementById(`result`);

let btnSum = document.getElementById(`btn-sum`);
let btnSubtrac = document.getElementById(`btn-subtract`);
let btnMultiply = document.getElementById(`btn-multiply`);
let btnDivide = document.getElementById(`btn-divide`);

let validateInputs =() => {
    let num1 = parseFloat (numberOne.value);
    let num2 = parseFloat (numberTwo.value);

    if(isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers";
        return false;
    }

    return {num1, num2 };
};

btnSum.addEventListener ("click", () => {
    let values = validateInputs();;
    if (values) {
        let sum = values.num1 + values.num2;
        result.textContent = `result : ${sum}`;
    }
});

btnSubtrac.addEventListener ("click", () => {
    let values = validateInputs();;
    if (values) {
        let difference = values.num1 - values.num2;
        result.textContent = `result : ${difference}`;
    }
});

btnMultiply.addEventListener ("click", () => {
    let values = validateInputs();;
    if (values) {
        let product = values.num1 * values.num2;
        result.textContent = `result : ${product}`;
    }
});

btnDivide.addEventListener ("click", () => {
    let values = validateInputs();;
    if (values) {
        if (values.num2 ===0){
            result.textContent = "Cannot divide by zero!"
            return;
        }
        let quotient = values.num1 / values.num2;
        result.textContent = `result : ${quotient}`;
    }
});

numberOne.addEventListener (`focus`,() => {
    numberOne.value = "";
    result.textContent = `result: ...`;
});

numberTwo.addEventListener (`focus`,() => {
    numberTwo.value = "";
    result.textContent = `result: ...`;
});