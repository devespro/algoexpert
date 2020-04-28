const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipherEncryptor(value, key) {
    const lowercaseValue = value.toLowerCase();
    let encrypted = '';
    for (let letter of lowercaseValue) {
        encrypted += getCipherLetter(letter, key);
    }

    return encrypted;
}

function getCipherLetter(letter, key) {
    let newLetterIndex = alphabet.indexOf(letter) + key;
    return alphabet[newLetterIndex % alphabet.length];
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;
