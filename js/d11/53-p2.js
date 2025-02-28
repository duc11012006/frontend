// yourNumber = 2018
// 8 0 2

let yourNumber =0; // 3 - 1 = 2
let shape ="";
let result1 = 0;
let result2 =0;
let min = 9;

while(yourNumber > 0){ 
    let digit = yourNumber %10; // 520349 % 10  9
   // console.log(digit);  // 
    if(digit % 2 == 0) { 
        result1 = result1 + 1;  
        
    }else{
        result2 = result2 + 1;  

    }
    //
   
    yourNumber = Math.trunc(yourNumber/10);  // 520349 / 10
    
}

if(yourNumber == 0 ) result1 = 1;

let result = result1-result2

// 4 
// 3 
// 2 
// 5
// No
// console.log(result1);
// console.log(result2);
console.log(`${result1} - ${result2} = ${result}`)
// console.log(5 % 2); 

// 8 % 2 = 0 
// 9 % 2 = 1
// 6 % 2 = 0



// 5 cuc keo chia 2 nguoi moi nguoi 2 cục (/), du 1 (%)

// if(yourNumber co so chan thi lay ){

// }else{
//     (co so le thi khong lay)
// }

