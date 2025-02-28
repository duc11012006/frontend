let numerator = 4;
let denominator = 12;
let resultNumerator = 4;
let resultDenominator = 6;
let ucln = 1;


    let min = Math.min(numerator,denominator); //8


    for(let i = min; i >= 2; i--) {
        if( numerator % i == 0 &&  denominator % i ==0 ) {
            ucln = i;
            break;
        }
            
    }
    

// UCLN cua numerator va denominator: ..x.. 4 ....  12 .... => for i chay tu min(numerator,denominator) chay ve 2, neu 

resultNumerator = numerator / ucln;
resultDenominator = denominator / ucln;
// 4/6 = 2/3

console.log (numerator + "/" + denominator + " = " + resultNumerator + "/" + resultDenominator)