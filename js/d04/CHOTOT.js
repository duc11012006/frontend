let height = 9 ;
let shape = "";
let recordC= "";
let space = " ".repeat(2);

for (let i = 1; i <= height; i++ ){
    // C
    if(i == 1 ||  i == height ) {
        recordC =  " ".repeat(1) + "=".repeat(height-1);
    }else {
        recordC =  "=" + " ".repeat(height-1);
    }
    
    // H
    if( i == Math.trunc(height / 2 +1)){
        recordH =  "=".repeat(height);
 
     }else {
         recordH = "=" + " ".repeat(height-2) + "=";
     }

    //o
    if(i == 1 ||  i == height ) {
        recordO =  "=".repeat(height )
    }else {
        recordO =   "=" + " ".repeat(height-2) + "="
    }

    //T
    if(i == 1  ) {
        recordT =  "=".repeat(height );
    }else {
        recordT =  " ".repeat((height-1)/2) + "=" + " ".repeat((height-1)/2);
    }

    //
    

    shape += recordC + space + recordH + space + recordO + space.repeat(3) + recordT +  space + recordO + space + recordT + "\n";
}

console.log(shape);