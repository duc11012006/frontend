let arrInt = [0, 1, 2, 12, 0];
let result = "Không đối xứng";
let length = arrInt.length;

for(let i = 0; i < (length / 2); i++) {
    if(arrInt[i] != arrInt[length-i-1]) {
        result = "Đối xứng";
        break;
    }
}

console.log(result)