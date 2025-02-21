            //0 1 3 4 5
let arrInt = [3,2,6,2,3];
let result = "";

var min = Math.min.apply(null, arrInt);

for(let i = 0; i <= arrInt.length -1; i++){
    
    if(arrInt[i] == min){
        result = i;
        break;
    }
}
console.log(result)

// min      lay so nho nhat trong arrInt    min=2
// chay qua cac phan tu trong arrInt, thang nao = min => result = i, break

// 3 2 4 2 5
// A B C D F: tim nguoi it tien nhat xuat hien dau tien
// for i=0; i <




