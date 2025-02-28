let str = "D:/Data/Doing/psd/hailan.doc";

str = str.replace(":", "");
str = str.replace(new RegExp("/", "g"), ">");

console.log(str);