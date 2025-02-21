let arrInt = [-1, -2];
let result = "Không tăng dần";

for(let i = 0; i < arrInt.length - 1; i++) {
    if(arrInt[i] >= arrInt[i+1]) {
        result = "Tăng dần";
        break;
    }
}

console.log(result)