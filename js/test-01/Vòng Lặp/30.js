// let start = 1;
// let end   = 10;
// let result = "";

// let startNew = start + 1;

// if(startNew % 2 != 0) startNew +=1;

// for(let i = startNew; i <= end; i +=2) {
//     result += i + " ";
// }

// if(result == "") result = "Không có";
// else{
//     result = result.slice(0,-1)
// }

// console.log(result); 


let start = 1;
let end   = 10;
let result = "";

let startNew = start + 1;
if(startNew % 2 != 0) startNew += 1;
for( let i = startNew; i <= end; i++) {
    result += i + " ";
}

if(result == "") result = "Không có";
else{
    result = result.slice(0,-1);
}

console.log(result);