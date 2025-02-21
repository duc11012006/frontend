// let yourNumber = 1234;


// let digits = yourNumber.toString().split('').map(Number);


// let evenDigits = digits.filter(digit => digit % 2 === 0);


// if (evenDigits.length === 0) {
//     console.log("Không có");
// } else {
//     let sum = evenDigits.reduce((acc, digit) => acc + digit, 0);
//     console.log(`${evenDigits.join(' + ')} = ${sum}`);
// }

let yourNumber = 1234;

let digits = yourNumber.toString().split('').map(Number);

let evenDigits = digits.filter(digits => digits % 2 === 0);

if(evenDigits.length === 0){
    console.log("Không có");
}else{
    let sum = evenDigits.reduce((acc,digit) => acc + digit,0);
    console.log(`${evenDigits.join(' + ')} = ${sum}`);
}