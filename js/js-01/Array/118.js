let arrInt = [0, 0, 0, 0];
let result ="Tăng dần";

for (let i = 0; i < arrInt.length - 1 ; i++){
    if(arrInt[i] >= arrInt [i+1]){
        result ="Không tăng dần"
        break;
    }
}

console.log(result);