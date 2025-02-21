let n = 2;

function calculateSum(n) {
    console.log("n = " + n);
    
    let sum = 0;
    let expression = "";
    
    for(let i = 1; i <= n; i++) {
        sum += i;
        
        if (i === 1) {
            expression = "1";
        } else {
            expression += " + " + i;
        }
        
        console.log(expression + " = " + sum);
    }
}