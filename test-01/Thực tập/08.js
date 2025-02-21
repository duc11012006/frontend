let arrInt = [4, 2, 3, 6,];
let result= "";
let sum = 0;
let sumEven = 0;
let sumOdd = 0;
let sumAll = 0;

// console.log("Phan tu thu 1 - chi so 0: " + arrInt[0])
// console.log("Phan tu thu 2 - chi so 1: " + arrInt[1])
// console.log("Phan tu thu 3 - chi so 2: " + arrInt[2])
// console.log("Phan tu thu 4 - chi so 3: " + arrInt[3])

for(let i = 0; i < arrInt.length; i++){
    if(arrInt[i] % 2 == 0 ){
        sumEven += arrInt[i];
    }else{
        sumOdd += arrInt[i];
    }
    sumAll += arrInt[i];
}

console.log("sumEven = " + sumEven);
console.log("sumOld = " + sumOdd);
console.log("sumAll = " + sumAll);


// Phan tu thu 1 - chi so 0: 4
// Phan tu thu 2 - chi so 1: 2
// Phan tu thu 3 - chi so 2: 3
// Phan tu thu 4 - chi so 3: 6
// for