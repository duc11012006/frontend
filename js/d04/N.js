// height = 7       i           code
// =     =          1           "=" +  " ".repeat(5) + "="
// ==    =          2           "=" +  " ".repeat(0) + "=".repeat(1) + " ".repeat(4) + "="
// = =   =          3           "=" +  " ".repeat(1) + "=".repeat(1) + " ".repeat(3) + "="
// =  =  =          4           "=" +  " ".repeat(2) + "=".repeat(1) + " ".repeat(2) + "="
// =   = =          5           "=" +  " ".repeat(3) + "=".repeat(1) + " ".repeat(1) + "="
// =    ==          6           "=" +  " ".repeat(4) + "=".repeat(1) + " ".repeat(0) + "="
// =     =          7           "=" +  " ".repeat(5) + "="
// h = 3 + (i-2) + x
// h = 1 + i + x => x = h-1-i
let height = 9;
let shape = "";
let recordN= "";

for (let i = 1; i <= height; i++ ){
    if(  i == 1 ||  i == height){
       recordN =  "=" +  " ".repeat(height-2) + "="
    }else {
        recordN = "=" +  " ".repeat(i-2) + "=" + " ".repeat(height-1-i) + "=" ;    
    }
    shape += recordN + "\n";
}
 
console.log(shape);