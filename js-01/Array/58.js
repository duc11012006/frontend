let arrInt = [3, 8, 3];
let sumEven = 0;
let sumOdd = 0;
let sumAll = 0;

for (let elem in arrInt) {
  if (arrInt[elem] % 2 === 0) sumEven += arrInt[elem];
  else sumOdd += arrInt[elem];
}

sumAll = sumEven + sumOdd;

console.log('sumEven =', sumEven);
console.log('sumOdd =', sumOdd);
console.log('sumAll =', sumAll);