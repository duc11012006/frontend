// height = 7       i       code
// =     =          1       "=" + " ".repeat(5) + "="
// ==   ==          2       "=" + " ".repeat(0) + "=" + " ".repeat(3) + "=".repeat(2)
// = = = =          3       "=" + " " + "=" + " " + "=" + " " + "="
// =  =  =          4       "=" + " ".repeat(2) + "=" + " ".repeat(2) + "="
// =     =          5       "=" + " ".repeat(5) + "="
// =     =          6       "=" + " ".repeat(5) + "=" 
// =     =          7       "=" + " ".repeat(5) + "="
// h = 3 + x + x
// x = 
// i  x
// 2  0   i-2
// 4  1
// h = 4 + 2x + y
// h = 4 + 2(i-2) + y
// y = h-4  - 2(i-2)
// y = h - 4 - 2i + 4
// y = h-2i = 7 - 2.2 = 3

let height = 7;
let shape = "";
let recordM = "";

for (let i = 1; i <= height; i++) {
   if (i == 1 ||  i > Math.trunc(height / 2) + 1  ) {
      recordM = "=" + " ".repeat(height-2) + "=";

   } else if (i == Math.trunc(height / 2) +1 ) {
      recordM = "=" + " ".repeat((height-3)/2) + "=" + " ".repeat((height-3)/2)+ "=";
   } else {
      recordM =   "=" + " ".repeat(i-2) + "=" + " ".repeat(height-2*i) + "=" + " ".repeat(i-2) + "="
   }
   shape += recordM + "\n";
}

console.log(shape);