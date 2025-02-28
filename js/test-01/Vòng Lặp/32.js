// let arrInt = [2, 4, 6, 2, 7, 8];
// let result = "";
// let sum = 0;
// let count = 0;

// for (let i = 0; i < arrInt.length; i++) {
//     if (i % 2 == 0 && arrInt[i] % 2 == 0) {
//         sum += arrInt[i];
//         count++;
//         result += arrInt[i] + " + ";  
//    }
// }

// result = result.slice(0, -3);

// console.log(`Avg: (${result || 0}) / ${count || 1} = ${count > 0 ? sum / count : 0}`);


let arrInt = [2,4,6,2,7,8];
let result = "";
let count = 0;
let sum = 0;

for(let i = 0; i < arrInt.length; i++){
    if(i % 2 == 0 && arrInt[i] % 2 == 0){
        sum += arrInt[i];
        count++;
        result += arrInt[i] + " + ";
    }
}

result = result.slice(0,-3);
console.log(`Avg : (${result || 0}) / ${count || 1} = ${count > 0 ? sum / count : 0}`);



// vi tri     1 2 3 4 5 6 
// index i    0 1 2 3 4 5
// value      2 4 6 2 7 8 

//in ra duoc cac gia tri o vi tri le trong mang
// phần tử có giá trị chẵn và xuất hiện ở vị trí lẻ trong mảng arrInt đã cho (vị trí bắt đầu từ 1, 2, … thì chỉ số bắt đầu từ 0, 1, …)
// giá trị chẵn =  value  arrInt[i]
// vị trí lẻ   = i
// con fix lai di 

// phan tu xuat hien o vi tri le: vi tri 1-23-5 tuong ung cac gia tri 2 6 7, nhung chi co so 2-6 la chan nen no show ra 2-6 la dung
// phan poutput cua bai bi sai

// Avg: (2 + 6) / 2 = 4 ;


// i chan dau
// value chan dau