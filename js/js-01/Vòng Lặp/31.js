// let start = 1;
// let end = 30;
// let nums = '';

// if (start > end) {
//     console.log("Không có");
// } else {
//     for (let i = start; i <= end; i++) {
//         if (i % 13 === 0) {
//             nums += i + ' ';
//         }
//     }
//     if (nums === '') {
//         console.log("Không có");
//     } else {
//         console.log(nums.trimEnd());
//     }
// }





let start = 1;
let end = 30;
let nums = '';

if (start > end) {
    console.log("Không có");
} else {
    for (let i = start; i <= end; i++) {
        if (i % 13 === 0) {
            nums += i + ' ';
        }
    }
    if (nums === '') {
        console.log("Không có");
    } else {
        console.log(nums.trimEnd());
    }
}