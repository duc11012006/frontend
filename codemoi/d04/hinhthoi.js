// height = 7               i       code
//    o         1           1       " ".repeat(3) + "o".repeat(1) + " ".repeat(3)
//   ooo        2           2       " ".repeat(2) + "o".repeat(3) + " ".repeat(2)
//  ooooo       3           3       " ".repeat(1) + "o".repeat(5) + " ".repeat(1)


//heightBottom = 4
// ooooooo      1           4       "o".repeat(height
//  ooooo       2           1       " ".repeat(1) + "o".repeat(5) + " ".repeat(1)
//   ooo        3           2       " ".repeat(2) + "o".repeat(3) + " ".repeat(2)
//    o         4           3       " ".repeat(3) + "o".repeat(1) + " ".repeat(3)
// for di tu 1-4
// for di tu 
// 1 so vog lap la 7    8
// 2 so vog lap la 5    7
// 3 so vog lap la 3    6

// 2h - 1 = i-1 + i-1 + x
// i-1 + i-1 + x = 2h - 1 
// x =  2h - 1 -i + 1 - i + 1
// x = 2h + 1 - 2i
// i=4 > x = 2.4 + 1 - 8


let height = 7;
let shape = "";
let record = "";

let heightTop =  Math.trunc(height / 2);
let heightBottom = height - heightTop;


 for (let i = 1; i <= heightTop; i++) {
     record= " ".repeat(heightTop-i + 1) + "o".repeat(2*i-1) + " ".repeat(heightTop-i +1) 
    
   shape += record + "\n";
 }

for (let i = 1; i <= heightBottom; i++ ){
    record = " ".repeat(i-1) + "o".repeat((heightBottom*2)+1-2*i) + " ".repeat(i-1); 
  

    shape += record + "\n";
}
 
console.log(shape);

