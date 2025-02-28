let input = "Lan/2,12,3,4#Dung/5,7#Cuong/5,2,97";
let result = "";

let arrInput = input.split(/#/);

for(let infoNumber in arrInput) {
    let arrInfo = arrInput[infoNumber].split(/[,]/);
    let maxScore = 0;

    for(let i = 1; i < arrInfo.length; i++) {
        maxScore = Math.max(maxScore, parseInt(arrInfo));
    }
    result += arrInfo[0] + " : " + maxScore + "\n";
}

console.log(result);