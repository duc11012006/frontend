let arrScore = [12, 19, 8, 4, 10];
let arrStudent = ["Hiếu", "Dũng", "Minh", "Cường", "Lan"];
let indexFind = 0;

let length = arrScore.length;
for (let i = 0; i < length; i++) {
    let currentScore = arrScore[i];
    indexFind = currentScore > arrScore[indexFind] ? i : indexFind;
}

console.log(`Học viên có điểm số cao nhất - ${arrStudent[indexFind]}: ${arrScore[indexFind]}`);
