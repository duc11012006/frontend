let str = "D:/Data/Doing/psd/task.mp3";

str = str.replace(".", "");
str = str.replace(new RegExp("/", "g"), " > ");

console.log(str);