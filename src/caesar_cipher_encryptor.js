const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipherEncryptor(string, key) {
    let encrypted = '';
    for (let letter of string) {
        encrypted += getCipherLetter(letter, key);
    }

    return encrypted;
}

function getCipherLetter(letter, key) {
    let newLetterIndex = alphabet.indexOf(letter) + key;
    return alphabet[newLetterIndex % alphabet.length];
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;
