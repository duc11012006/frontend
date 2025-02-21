let num = 99992;
let sum = 0;

while(num > 0) {
    let lastNumber = sum % 10;
    sum += lastNumber;
    sum = Math.floor(num/10);

    if(num == 0 && sum >= 10) {
        sum = sum;
        sum = 0;
    }
}

console.log(sum);
