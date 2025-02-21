let str = "php/12/frontend/30/javascript/15/python/140";
let strArr = str.split("/");
let max = strArr[1];

let length = strArr.length;
for(let i = 3; i < length; i += 2) {
    let time = parseInt(strArr[i]);
    if(time > max){
        max = time;    
    }

}


let result = "";
for(let i = 1; i < length; i += 2) {
    let time = parseInt(strArr[i]);
    if(time == max) {
        result += strArr[i - 1] + ":" + time + "\n";
    }
}

console.log(result);