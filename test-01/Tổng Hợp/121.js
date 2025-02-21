let arrInt = [1, 2, 3, 4, 4];
let maxOne = nums[0];
let maxTwo = nums[1];
let length = nums.length;

for(let i = 2; i < length; i++) {
    if(nums [i] > maxOne) {
        maxTwo = Math.max(maxOne, maxTwo);
        maxOne = nums [i];
    }else if (nums [i] > maxTwo) {
        maxOne = Math.max(maxOne,maxTwo);
        maxTwo = nums[i];
    }
}

console.log(`Max 1: ${maxOne} - Max 2 : ${maxTwo}`);
