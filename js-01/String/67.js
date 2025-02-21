let str = "hai lan";

for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (character === character.toLowerCase()) {
        character = character.toUpperCase();
    } else {
        character = character.toLowerCase();
    }

    str = str.substring(0, i) + character + str.substring(i + 1);
}

console.log(str);