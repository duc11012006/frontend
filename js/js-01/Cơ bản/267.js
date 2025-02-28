let number = 4010;
let result = "";

function conetTime (seconds) {
    hour = Math.floor(seconds/3600) ;
    minutes = Math.floor((seconds%3600)/60);
    remainingSecond = (seconds%60);

    return `${hour}:${minutes}:${Remainingsecond}`;
}

console.log("Thời gian của bạn là: ", Time(4010));