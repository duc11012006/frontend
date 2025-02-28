let arrInt = [19,14,19,19,15];
let result = "";

var max = Math.max.apply(null, arrInt);

for(let i = arrInt.length -1; i >= 0 ; i--){
    
    if(arrInt[i] == max){
        result = i;
        break;
    }
}
console.log(result);