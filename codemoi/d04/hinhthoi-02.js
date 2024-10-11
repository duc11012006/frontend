// height = 7               i       code
//    o         1           1       " ".repeat(3) + "o".repeat(1) + " ".repeat(3)
//   o o        2           2       " ".repeat(2) + "o".repeat(1) + " ".repeat(1) + "o".repeat(1) + " ".repeat(2)
//  o   o       3           3       " ".repeat(1) + "o".repeat(1) + " ".repeat(3) + "o".repeat(1) + " ".repeat(1)
// o     o      1           4       "o".repeat(1) + " ".repeat(5) + "0".repeat(1)
//  o   o       2           1       
//   o o        3           2       
//    o         4           3       
// for di tu 1-4
// for di tu 
// 1 so vog lap la 7    8
// 2 so vog lap la 5    7
// 3 so vog lap la 3    6

// 2h - 1 = i-1 + i-1 + x
// i-1 + i-1 + x = 2h - 1 
// x =  2h - 1 -i + 1 - i + 1
// x = 2h + 1 - 2i
// i=4 > x = 2.4 + 1 - 8

// h-2=x

let height = 7;
 let shape = "";
 let record = "";

 let heightTop =  Math.trunc(height / 2);
 let heightBottom = height - heightTop;


 for (let i = 1; i <= heightTop; i++) {
	if(i == 1) {
		record= " ".repeat(heightTop) + "o" + " ".repeat(heightTop);
	}else{
		record= " ".repeat(heightTop-i + 1) + "o" + " ".repeat(2*i-3) +  "o" +   " ".repeat(heightTop-i +1) 
	}
	shape += record + "\n";
}

  
for (let i = 1; i <= heightBottom; i++ ){
	if(i == heightBottom) {
	record= " ".repeat(heightBottom-1) + "o" + " ".repeat(heightBottom);
	}else{
		record = " ".repeat(i-1) + "o"+ " ".repeat((heightBottom*2)+1-2*i - 2) +  "o" +" ".repeat(i-1); 
	}

	shape += record + "\n";
}

console.log(shape);












// let height = 7;
// let shape = "";
// let record = "";

// let heightTop =  Math.trunc(height / 2);
// let heightBottom = height - heightTop;


//  for (let i = 1; i <= heightTop; i++) {
//      record= " ".repeat(heightTop-i + 1) + "o".repeat(2*i-1) + " ".repeat(heightTop-i +1) 
    
//    shape += record + "\n";
//  }

//  " ".repeat(3) + "o".repeat(1) + " ".repeat(3)
 
// console.log(shape);

