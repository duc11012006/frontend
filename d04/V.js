// height = 5       i           code
// =       =        1           " ".repeat(0) + "=" + " ".repeat(7) + "=" + " ".repeat(0)
//  =     =         2           " ".repeat(1) + "=" + " ".repeat(5) + "=" + " ".repeat(1)
//   =   =          3           " ".repeat(2) + "=" + " ".repeat(3) + "=" + " ".repeat(2)
//    = =           4           " ".repeat(3) + "=" + " ".repeat(1) + "=" + " ".repeat(3)
//     =            5           " ".repeat(4) + "=" + " ".repeat(4)
// h  cho ngoi = h + 3      2h-1
// 5    9
// 4    7
// 3    5
// 2h - 1 = 2 + i-1 + i-1 + x
// 2h - 1 - 2i=  + x
// 2.5-1-2.2 = 5
let height = 7;
let shape = "";
let recordV= "";

for (let i = 1; i <= height; i++ ){
    if(  i == height){
       recordV = " ".repeat(height-1) + "=" + " ".repeat(height-1)  ;
    }else {
        recordV = " ".repeat(i-1) + "=" + " ".repeat(2*height-1-2*i) + "=" + " ".repeat(i-1)
    }
    shape += recordV + "\n";
}
 
console.log(shape);