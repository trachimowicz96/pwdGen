function getPasswordLenght() {
    const lenght = document.getElementById("lenght").value;
    return Number(lenght)
}

function getPasswordProperties() {
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {};

    for (const id of ids) {
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }
    return properties
}

function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start +26; i++) {
        chars.push(String.fromCharCode(i ));
    }
    return chars;
}

function getNumbers() {
    const nums = [];

    for(let i = 0; i < 10; i++) {
        nums.push(i);
    }
    return nums;
}

const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = getNumbers();
const special = ["!", "@", "#", "%", "$", "(", ")", "|", "/", ",", ".", "-", "_"];

function generatePassword() {
    const lenght = getPasswordLenght();
    const properties = getPasswordProperties();
      
    const characters = [];
    if (properties.lowercase) characters.push(...lowercaseChars);
    if (properties.uppercaseChars) characters.push(...uppercaseChars);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);

    if(characters.length === 0) {
        return alert("You must select at least one set of characters.");
    }

    console.log(characters);

      let pwd = [];
      for (let i = 0; i < lenght; i++) {
        const randomIdx = Math.floor(Math.random() * lenght);
        const char = characters[randomIdx];
        pwd.push(char);
      }
      const pwdString = pwd.join("");
      document.getElementById("password").innerHTML = "<p>" + pwdString + "<p/>";
}