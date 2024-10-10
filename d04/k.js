// height = 5       i       code
// =  =             1       "=" + " ".repeat(2) + "="
// = =              2       "=" + " ".repeat(x) + "=" + " ".repeat(y)
// ==                3       "="repeat(2) + " ".repeat(2)
// = =              4       "=" + " ".repeat(1) + "=" + " "
// =  =             5       "=" + " ".repeat(2) + "="
// i  x   y     h=7
// 2  3
// 3  2
// i + x = h - 2

// h-1= y + (height - 2 - i) + 2
// y = (h-1) - (h-2-i) -2
// y = -1 +2+i-2
// y = 1 + i -2
// y = i-1

// i        khoangtrang     h=9
// 6        3
// 7        4
// 8        5
// x = i - 3
// h -1 = 2 + i -3 + y
// y = h -1 + 1 - i
// y = (h-i)   

let height = 9;
let shape = "";
let recordK= "";

for (let i = 1; i <= height; i++ ){
    if(  i == 1 ||  i == height){
       recordK =  "=" + " ".repeat(height-3) + "=";
    }else if( i == Math.trunc(height / 2 +1 )){
        recordK = "=" + " ".repeat((height-5) / 2) + "=" + " ".repeat((height-1) / 2);
    }else if ( i < Math.trunc(height / 2 +1 )){
        recordK = "=" + " ".repeat(height - 2 - i) + "=" + " ".repeat(i-1);
    }else{
        recordK = "=" + " ".repeat(i - 3) + "=" + " ".repeat(height-i);
    }
    shape += recordK + "\n";
}
 
console.log(shape);