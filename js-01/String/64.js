let str = "   hai LAN   ";

str = str.trim();

str = str.replaceAll(/\s+/g, " ");
str = str.replaceAll(/^\s+|\s+$/g, "");

str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

if (str[str.length - 1] !== ".") str = str + ".";

console.log(str);
