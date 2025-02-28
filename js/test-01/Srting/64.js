let str = "  java   Is   easy   .  ";

str = str.trim();

str = str.replaceAll(/\s+/g, " ");

str = str.substring(0,1).toUpperCase() + str.substring(1).toLocaleUpperCase();

if(str[str.length - 1] != '.') str = str + ".";

console.log(str)