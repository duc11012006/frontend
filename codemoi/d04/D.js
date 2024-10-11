// height = 7       i       code
// ====             1       "=".repeat(4) + " ".repeat(3)
// =    =           2       "=" + " "repeat(4) + "=" + " "
// =     =          3       "=" + " "repeat(5) + "="
// =     =          4       "=" + " "repeat(5) + "="
// =     =          5        "=" + " "repeat(5) + "="
// =    =           6       "=" + " "repeat(4) + "=" + " "
// ====             7       "=".repeat(4) + " ".repeat(3)
// h= h - 3 + x          
// h= x-2

let height = 9;
let shape = "";
let recordD = "";

for (let i = 1; i <= height; i++) {
   if (i == 1 || i == height) {
      recordD = "=".repeat(height - 3) + " ".repeat(3);

   } else if (i == 2 || i == height - 1) {
      recordD = "=" + " ".repeat(height - 3) + "=" + " ";
   } else {
      recordD = "=" + " ".repeat(height - 2) + "=";
   }
   shape += recordD + "\n";
}


console.log(shape);