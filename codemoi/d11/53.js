// yourNumber = 2018
// 8 0 2

let yourNumber = 52349;
let shape ="";
let result = "yes"

while(yourNumber > 0){ 
    let digit = yourNumber %10; // 5 % 10
    console.log(digit);  // 
    if(digit % 2 != 0) { 
        result = "No";  
        break;
    }
    
    yourNumber = Math.trunc(yourNumber/10);  // 5
    
}
// 4 
// 3 
// 2 
// 5
// No
console.log(result);

// console.log(5 % 2); 

// 8 % 2 = 0 
// 9 % 2 = 1
// 6 % 2 = 0



// 5 cuc keo chia 2 nguoi moi nguoi 2 cục (/), du 1 (%)

// if(yourNumber co so chan thi lay ){

// }else{
//     (co so le thi khong lay)
// }

