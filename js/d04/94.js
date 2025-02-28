// yourNumber = 12
// 1 + 2 = 3

let yourNumber =50003;
let result = "";
let sum = 0;

while(yourNumber > 0){ 
    let digit = yourNumber % 10; // 2 1
    sum += digit;
    result =  digit + " + " + result ;

    yourNumber = Math.trunc( yourNumber/10);
}


result = result.slice(0, -3) ;
console.log(result + " = " + sum);