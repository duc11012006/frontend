let year = 1;
let result = "Không là năm nhuận";

if(year % 400 ==0 || (year % 4 ==0 && year % 100 != 0)){
    result = "Năm nhuận";
}
    
console.log(result);