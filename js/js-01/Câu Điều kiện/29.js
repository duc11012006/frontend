// let numberOne = 6;
// let numberTwo = 2;
// let math = "-";

// let result = (num1, num2, math) => {
//     if (math === "/" && num2 === 0) return "Không thể chia cho 0";
//     if (math === "-") return `${num1} - ${num2} = ${num1-num2}`;
//     if (math === "+") return `${num1} + ${num2} = ${num1+num2}`;
//     if (math === "*") return `${num1} * ${num2} = ${num1*num2}`;
//     return "Không thực hiện được, phép tính không hợp lệ";
// }

// console.log(result(numberOne, numberTwo, math));

let numberOne = 6;
let numberTwo = 3;
let math = "/";

let result = (numberOne,numberTwo,math) => {
    if(math === "/" && numberTwo === 0) return "Không thể chia cho 0";
    if(math === "-") return `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
    if(math === "+") return `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
    if(math === "*") return `${numberOne} * ${numberTwo} = ${numberOne} * ${numberTwo}`;
    return "Không thực hiện được, phép tính không hợp lệ";
}

console.log(result(numberOne,numberTwo,math));