let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '1234567890';
let symbol = '@#$';

let passwordInput = document.getElementById("passwordInput");
let passwordRange = document.getElementById("passwordRange");
let lowerCheck = document.getElementById("lowerCheck");
let upperCheck = document.getElementById("upperCheck");
let numCheck = document.getElementById("numCheck");
let symbolCheck = document.getElementById("symbolCheck");

const generateUnique = (charSet) => {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

const generatePassword = () => {

    let password = '';
    const selectedChars = [];

    if (upperCheck.checked) selectedChars.push(upperCase);
    if (lowerCheck.checked) selectedChars.push(lowerCase);
    if (numCheck.checked) selectedChars.push(number);
    if (symbolCheck.checked) selectedChars.push(symbol);

    if (selectedChars.length === 0) {
        alert("Please select at least one character set.");
        return;
    }

    for (let i = 0; i < parseInt(passwordRange.value); i++) {
        const randomCharSet = selectedChars[Math.floor(Math.random() * selectedChars.length)];
        password += generateUnique(randomCharSet);
    }

    passwordInput.value = password;
}

const generatePasswordBtn = () => {
    generatePassword();
}

passwordRange.addEventListener('input', () => {
    document.querySelector('.lengthText span').innerText = passwordRange.value;
    generatePassword();
});

function copyPassword() {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    passwordInput.blur();
    alert("Password copied");
}