let num = 92;
let sum = 0;

while (num > 0) {
    let lastNumber = num % 10;
    sum += lastNumber;
    num = Math.floor(num / 10);

    if (num == 0 && sum >= 10) {
        num = sum;
        sum = 0;
    }
}

console.log(sum);
