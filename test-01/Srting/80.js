let str = "ab@#AB69C!}+21";

let numberOnly  = str.replaceAll(/[^0-9]/g, "");
let characterOnly = str.replaceAll(/[^A-Za-z]/g, "");
let speciaOnly = str.replaceAll(/[A-Za-z0-9]/, "");

console.log(`Chuỗi số : ${numberOnly}`);
console.log(`Chuỗi chữ:  ${characterOnly}`);
console.log(`Chuỗi đặc biệt : ${speciaOnly}`);
