let arrScore      = [2, 9, 8, 4, 10]
let arrStudent = ["Han", "Dũng", "Linh", "Cường", "Lan"];
let indexFind = 0;

let length = arrScore.length;
for(let i = 0; i < length; i++) {
    let currentScore = arrScore[i];
    indexFind = currentScore > arrScore[indexFind] ? i : indexFind;

}

console.log(`HV có điểm cao nhất -  ${arrStudent[indexFind]} : ${arrScore[indexFind]}`);