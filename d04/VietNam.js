let height = 9;
let shape = "";
let recordC = "";
let space = " ".repeat(2);

for (let i = 1; i <= height; i++){
    //V
    if(  i == height){
        recordV = " ".repeat(height-1) + "=" + " ".repeat(height-1)  ;
     }else {
         recordV = " ".repeat(i-1) + "=" + " ".repeat(2*height-1-2*i) + "=" + " ".repeat(i-1)
     }

    //i
    if(i == 1 ||  i == height ) {
        recordI =  "=".repeat(height );
    }else {
        recordI =  " ".repeat((height-1)/2) + "=" + " ".repeat((height-1) /2);
    }

    //E
    if( i == 1 ||  i == height|| i == Math.trunc(height / 2 +1 )){
        recordE =  "=".repeat(height);
     }else {
         recordE =  "="+ " ".repeat(height-1);
     }

    //T
    if(i == 1  ) {
        recordT =  "=".repeat(height );
    }else {
        recordT =  " ".repeat((height-1)/2) + "=" + " ".repeat((height-1)/2)
    }

    //N
    if(  i == 1 ||  i == height){
        recordN =  "=" +  " ".repeat(height-2) + "="
     }else {
         recordN = "=" +  " ".repeat(i-2) + "=" + " ".repeat(height-1-i) + "=" ;    
     }

    //A
    if (i == 1 ) {
        recordA = " ".repeat(height-1) + "=" + " ".repeat(height-1) ;
  
     } else if (i == Math.trunc(height / 2) +1 ) {
        recordA = " ".repeat((height-1)/2) + "=".repeat(height) + " ".repeat((height-1)/2)   ;
     } else {
        recordA =  " ".repeat(height - i) + "=" + " ".repeat(2*i-3) + "=" + " ".repeat(height - i)
     }

    //M
    if (i == 1 ||  i > Math.trunc(height / 2) + 1  ) {
        recordM = "=" + " ".repeat(height-2) + "=";
  
     } else if (i == Math.trunc(height / 2) +1 ) {
        recordM = "=" + " ".repeat((height-3)/2) + "=" + " ".repeat((height-3)/2)+ "=";
     } else {
        recordM =   "=" + " ".repeat(i-2) + "=" + " ".repeat(height-2*i) + "=" + " ".repeat(i-2) + "="
     }

     //

     shape += recordV + space + recordI + space + recordE + space + recordT + space + recordN + space + recordA + space + recordM + "\n";
    }
     
console.log(shape);