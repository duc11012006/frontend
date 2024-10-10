
// height = 4          
// ========xxx                   1       "=".repeat(8) + " ".repeat(3)
// x=      =xx                   2       " ".repeat(1) + "=" + " "repeat(6) +"=" + " ".repeat(2)
// xx=      =x                   3       " ".repeat(2) + "=" + " ".repeat(6) +"=" +" ".repet(1)
// xxx========                   4       " ".repeat(3) + "=".repeat(8) 

// 3 - 2
// 4 - 3

// i    x   y
// 1    0   3
// 2    1   2
// 3    2   1
// 4    3   0
// i + y = h
// y = h-i

// 

let height = 4;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if(i == 1 || i == height) {
        record =  " ".repeat(i-1) + "=".repeat(height*2) + " ".repeat(height-1);  
    }else {
        record =  " ".repeat(i-1) + "=" + " ".repeat(height*2 - 2)  + "=" + " ".repeat(height-i);
    }
    
    shape += record + "\n";
}
 
console.log(shape);
