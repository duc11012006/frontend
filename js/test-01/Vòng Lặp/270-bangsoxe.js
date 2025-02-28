
//            012345678901
 let label = "63-F2-3.2.2.11";
let result = "";
let point = 0;
let sum = 0;
let input = "";


// Lay 5 so cuoi  78323
//             x
// 65-F3-78.3.23
// input: 78323



for(let i = label.length-1; i >=0; i-- ){
    console.log("i: " + i + `- label[${i}]: ` + label[i]);

    if(label[i] >= "0" && label[i] <= "9") {
        input += label[i];
    }else if(label[i] == '-') {
        break;
    }
}    

console.log(input)

// label = label.slice(6);
// console.log(label);


while(input > 0){
    let digit = input % 10;
    input = Math.floor(input / 10);

    sum += digit;
}


point = sum % 10;

    if(point == 9){
        result = "Bạn là người may mắn";
    }
console.log(`Số nút là ` + point + "\n" + result);