// let yourNumber = 50003;
// let sum = 0;
// let numberString = yourNumber.toString();

// for (let i = 0; i < numberString.length; i++) {
//   sum += parseInt(numberString[i]);
// }

// console.log(`${numberString[0]} + ${numberString[1]} + ${numberString[2]} + ${numberString[3]} + ${numberString[4]} = ${sum}`);


let yourNumber = 1;
let sum = 0;
let numberString = yourNumber.toString();

for(let i = 0; i < numberString.length; i++){
  sum += parseInt(numberString[i]);
}

console.log(`${numberString[0]} + ${numberString[1]} + ${numberString[2]} + ${numberString[3]} + ${numberString[4]} = ${sum}`);