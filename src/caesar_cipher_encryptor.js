/**
 * Given a non-empty string of lowercase letters and an integer
 * representing a key, write a function that returns a new string obtained by
 * shifting every letter in the input string by k positions in the alphabet,
 * where k is the key.
 * @type {string}
 */
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
    if (newLetterIndex < 0 ) { // the input key is a negative number
        let shiftedLetterIndex = Math.abs(newLetterIndex % alphabet.length);
        return shiftedLetterIndex === 0 ? alphabet[shiftedLetterIndex] : alphabet[alphabet.length - shiftedLetterIndex];
    }
    return alphabet[newLetterIndex % alphabet.length];
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;
