// ourNumber = 162
// Total: 3 digits

let yourNumber =47569 ;
let result =0;




//              yourNumber   digit
//              /10          %10        result 
// 165/10       16           5          1
// 16/10        1            6          2
// 1/10         0            1          3
// 0 stop


while(yourNumber > 0){ 
    let digit = yourNumber % 10;

    console.log(yourNumber + " - " + digit);
    yourNumber = Math.trunc( yourNumber/10);
    result +=1;
    
}

  

console.log(`Total: ${result} digits`);