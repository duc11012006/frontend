let str = "D:/Data/Doing/deadline.pdf";

let indexDot = 0;
for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] == '.'){
        indexDot = i;
        break;
    }
} 

let indexSplash = 0;
for(i = str.length - 1; i>= 0; i--) {
    if(str[i] == '/') {
        indexSplash = i;
        break;
    }
}

let extension = str.substring(indexDot + 1);
let name = str.substring(indexSplash + 1, indexDot);

console.log(`Name : ${name}`);
console.log(`Ectension : ${extension}`);