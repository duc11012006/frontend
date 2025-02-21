let number = 7;
let result = "";
let multiplication = 0;

if (number <= 0) {
    console.log("Khong Thuc Hien Duoc");
}else{
    for (let i = number; i >= 1; i--){
        result +=i + " x "
        multiplication +=i;
    }
    result = result.slice(0, -3);
    console.log(result + " = " + multiplication);
}