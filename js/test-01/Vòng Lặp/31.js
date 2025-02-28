// let start = 1;
// let end   = 30;
// let result = "";

// let startNew = 13 - (start % 13) + start;

// for( let i = startNew; i < end; i++) {
//     result += i + "";
// }

// if(result == "") result = "Không có";
// else{
//     result = result.slice(0,-1);
// }

// console.log(result); 

let start = 1;
let end   = 30;
let result = "";

let startNew = 13 - (start % 13) + start;

for(let i = startNew; i < end; i++) {
    result += i + " ";
}

if(result == "") result = "Không có";
else{
    result = result.slice(0,-1);
}

console.log(result);