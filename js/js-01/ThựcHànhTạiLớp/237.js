let yourNumber = 157;
let result = "";
let discount = 1;
let percent = "";

if (yourNumber  <= 1) {
    result=15000;
}else if ( yourNumber  <= 5) {
    result= 13500;
}else if (yourNumber  > 5 &&  yourNumber<120) {
    result=11000;
}else if (yourNumber > 120) {
    result=11000;
    discount = 0.9;
    percent = " x 90%";
}

console.log ("%d x %d %s = %d vnđ",result, yourNumber,  percent, result * yourNumber * discount)