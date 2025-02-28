let start  = 12;
let end = 45;
let result ="";
// Output: 20 40
// So nam trong khoang 12 den 45 va chia het cho 4 va 5

for (let i = start; i <= end; i++ ) {
    if(i % 4 == 0 && i % 5 == 0) {
        result += i + " ";
    }
}

result = result.slice(0, -1);
console.log(result);

// i chay tu start den end
// neu i chia het cho 4 va cho 5, thi bo i vao resut