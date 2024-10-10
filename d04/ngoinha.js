// height = 7               i           code
//       =                  1           " ".repeat(6) + "=" + " ".repeat(6)     
//      = =                 2           " ".repeat(5) + "=" + " ".repeat(1) + "=" + " ".repeat(5)
//     =   =                3           " ".repeat(4) + "=" + " ".repeat(3) + "=" + " ".repeat(4)
//    =     =               4           " ".repeat(3) + "=" + " ".repeat(5) + "=" + " ".repeat(3)
//   =       =              5           " ".repeat(2) + "=" + " ".repeat(7) + "=" + " ".repeat(2)
//  =         =             6           " ".repeat(1) + "=" + " ".repeat(9) + "=" + " ".repeat(1)
// =           =            7           " ".repeat(0) + "=" + " ".repeat(11) + "="
// =============            1
// =           =            2
// =           =            3
// =           =            4
// =           =            5
// =           =            6
// =============            7
// i = 2   5
// i = 3   4
// i = height
// i + x = height
//     x = height - i



let height = 9;
let shape = "";
let recordN= "";

for (let i = 1; i <= height; i++ ){
    if( i == 1){
       recordN =  " ".repeat(height-1) + "=" + " ".repeat(height-1);     
    }else {
        recordN = " ".repeat(height - i) + "=" + " ".repeat(2*i-3) + "=" + " ".repeat(height-i);
    }
    shape += recordN + "\n";
}

for (let i = 1; i <= height; i++ ){
    if(i == 1 || i == height) {
        record = "=".repeat((height*2)-1);
    }else {
        record = "=" + " ".repeat((height*2)-3) + "=";
    }
    
    shape += record + "\n";
}
 
console.log(shape);
