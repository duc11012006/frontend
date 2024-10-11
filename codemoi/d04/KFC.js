let height = 7 ;
let shape = "";
let recordC= "";
let space = " ".repeat(2);

for (let i = 1; i <= height; i++){
    //K
    if(  i == 1 ||  i == height){
        recordK =  "=" + " ".repeat(height-3) + "=";
     }else if( i == Math.trunc(height / 2 +1 )){
         recordK = "=" + " ".repeat((height-5) / 2) + "=" + " ".repeat((height-1) / 2);
     }else if ( i < Math.trunc(height / 2 +1 )){
         recordK = "=" + " ".repeat(height - 2 - i) + "=" + " ".repeat(i-1);
     }else{
         recordK = "=" + " ".repeat(i - 3) + "=" + " ".repeat(height-i);
     }
     //F
     if( i == 1 || i == Math.trunc(height / 2) +1 ){
        recordF =  "=".repeat(height);
     }else {
         recordF=  "="+ " ".repeat(height-1);
     }

     //C
     if(i == 1 ||  i == height ) {
        recordC =  " ".repeat(1) + "=".repeat(height-1);
    }else {
        recordC =  "=" + " ".repeat(height-1);
    }

    //

    shape += recordK + space + recordF + space + recordC + "\n";
}
console.log(shape);
