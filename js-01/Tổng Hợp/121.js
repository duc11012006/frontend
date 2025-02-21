let nums = [2, 3, 4];
let maxOne = nums[0]; // 4
let maxTwo = nums[1]; // 2
let length = nums.length;

for (let i = 2; i < length; i++) {
    if (nums[i] > maxOne) {
        maxTwo = Math.max(maxOne, maxTwo);
        maxOne = nums[i]; // 6
    } else if (nums[i] > maxTwo) {
        maxTwo = Math.max(maxOne, maxTwo);
        maxTwo = nums[i];
    }
}

console.log(`Max 1: ${maxOne} - Max 2: ${maxTwo}`);
