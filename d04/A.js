// height = 5       i           code
//     =            1         " ".repeat(4) + "=" + " ".repeat(4) 
//    = =           2         " ".repeat(3) + "=".+ " ".repeat(1) + "=" + " ".repeat(3)
//   =====          3         " ".repeat(2) + "=".repeat(5) + " ".repeat(2)  
//  =     =         4         " ".repeat(1) + "=" + " ".repeat(5) + "=" + " ".repeat(1)
// =       =        5         " ".repeat(o) + "=" + " ".repeat(7) + "=" + " ".repeat(0)
// 2 3
// 4 1

//  2h - 1 = h - i + h - i + 2 + y
//  2h -1 -h + i -h + i -2 = y
//  y = -1 + i + i -2
//  y = -3 + 2i
let height = 5;
let shape = "";
let recordA = "";

for (let i = 1; i <= height; i++) {
   if (i == 1 ) {
      recordA = " ".repeat(height-1) + "=" + " ".repeat(height-1) ;

   } else if (i == Math.trunc(height / 2) +1 ) {
      recordA = " ".repeat((height-1)/2) + "=".repeat(height) + " ".repeat((height-1)/2)   ;
   } else {
      recordA =  " ".repeat(height - i) + "=" + " ".repeat(2*i-3) + "=" + " ".repeat(height - i)
   }
   shape += recordA + "\n";
}


console.log(shape);