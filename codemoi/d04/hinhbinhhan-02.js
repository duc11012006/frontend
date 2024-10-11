// height = 3           i       code
//   ======                1       " ".repeat(2) + "=".repeat(3)
//  =    =                 2       " ".repeat(1) + "=".repeat(3) + " "
// ======                  3       "=".repeat(3) + " ".repeat(2)

// height = 4          
// xxx========                1       " ".repeat(3)+ "=".repeat(8)
// xx=      =x                 2       " ".repeat(2) +"=".repeat(1) + " ".repeat(6) + "=" + " "
// x=      =xx                  3       " ".repeat(1) +"=".repeat(1) + " ".repeat(6)  +"=" +" ".repeat(2)
// ========xxx                   4       "=".repeat(8) +" ".repeat(3)

// 3 - 2
// 4 - 3

// i    x
// 1    0
// 2    1
// 3    2
// 4    3
//i - x = 1
// i - 1=  +x



let height = 8;
let shape = "";
let record= "";

for (let i = 1; i <= height; i++ ){
    if(i == 1 || i == height) {
        record =  " ".repeat(height-i)+ "=".repeat((height*2)) + " ".repeat(i-1);
    }else {
        record =  " ".repeat(height-i) + "=" + " ".repeat(height*2 - 2)  + "=" + " ".repeat(i-1);
    }
    
    shape += record + "\n";
}
 
console.log(shape);
