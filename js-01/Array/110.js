let arrInt = [0, 1, 2, 12, 0];
let length = arrInt.length;
let result ="Đối xứng";

for (let i = 0; i < (length / 2); i++){
    if(arrInt[i] != arrInt [length-i-1]){
        result ="Không đối xứng"
        break;
    }
}

console.log(result);