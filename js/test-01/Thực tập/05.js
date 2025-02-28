let start  = 8;
let end = 6;
let result ="";
let sum = 0;
// Output:1 + 2 + 3 + 4 + 5
// 1 2 3 4 5



if(start > end) {
    console.log("Khong Thuc Hien Duoc");
}else{

    for (let i = start; i <= end; i++ ) {
        result +=i + " + ";
        sum += i;
    }
    result = result.slice(0, -3);
    console.log(result + " = " + sum);
}



// neu start > end in ra ko thuc hien duojc
// nguoc lai thuc hien nhu nay gio