let yourNumber = 208;
let shape ="";
let result = "yes"

while(yourNumber > 0){ 
    let digit = yourNumber %10; // 8
    console.log(digit); 
    if(digit % 2 != 0) {
        result = "No";
    }
    yourNumber = Math.trunc(yourNumber/10); // 20
    
}
//  
console.log(result);