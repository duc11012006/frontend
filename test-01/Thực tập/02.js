let number = 100;
let result ="";

// Output: List even < 100: 2 4 6 8 ...

for (var i = 0; i <= 100; i+=2) {
   
        result +=i +" - ";
  
}
result = result.slice(0, -3); 

// xoa ky tu cuoi cung trong result
console.log(result);

// i chay tu 0 den 100, moi lan chay i tang 2 don vi
// bo i vaf - vao result