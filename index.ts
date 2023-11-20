document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    generateButton.addEventListener('click', generatePassword);
});

function generatePassword() {
    const lengthInput = document.getElementById('length') as HTMLInputElement;
    const uppercaseCheckbox = document.getElementById('uppercase') as HTMLInputElement;
    const numbersCheckbox = document.getElementById('numbers') as HTMLInputElement;
    const symbolsCheckbox = document.getElementById('symbols') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const length = +lengthInput.value;
    const uppercase = uppercaseCheckbox.checked;
    const numbers = numbersCheckbox.checked;
    const symbols = symbolsCheckbox.checked;

    const password = generateRandomPassword(length, uppercase, numbers, symbols);
    passwordInput.value = password;
}

function generateRandomPassword(length: number, uppercase: boolean, numbers: boolean, symbols: boolean): string {
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()_-+=<>?";

    let validCharset = charset;

    if (uppercase) {
        validCharset += uppercaseCharset;
    }

    if (numbers) {
        validCharset += numbersCharset;
    }

    if (symbols) {
        validCharset += symbolsCharset;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validCharset.length);
        password += validCharset.charAt(randomIndex);
    }

    return password;
}
