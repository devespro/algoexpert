function caesarCipherEncryptor(string, key) {
    const actualKey = key % 26;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';

    for (let letter of string) {
        result += getCipherLetter(letter, actualKey, alphabet);
    }

    return result;
}

function getCipherLetter(letter, key, alphabet) {
    let newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % alphabet.length];
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
