let number = 4;
let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Số nguyên tố" : "Không là số nguyên tố");