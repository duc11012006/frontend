let arrInt = [3, 8, 3];
let sumEven = 0;
let sumOdd  = 0;
let sumAll  = 0;

for(let elm in arrInt) {
    if(arrInt[elm] % 2 == 0) sumEven += arrInt[elm];
    else sumOdd += arrInt[elm];
}

sumAll = sumEven + sumOdd;

console.log(`sumEven = ${sumEven}`);
console.log(`sumOdd = ${sumOdd}`);
console.log(`sumAll = ${sumAll}`);