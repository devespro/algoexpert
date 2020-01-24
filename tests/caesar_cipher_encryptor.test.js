const chai = require('chai');
const encryptor = require('../src/caesar_cipher_encryptor');

describe('Ceaser cipher encryptor tests', () => {
    it('Test Case #1', function() {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 0)).to.deep.equal('abc');
    });

    it('Test Case #2', function() {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 3)).to.deep.equal('def');
    });

    it('Test Case #3', function() {
        chai.expect(encryptor.caesarCipherEncryptor('xyz', 2)).to.deep.equal('zab');
    });

    it('Test Case #4', function() {
        chai.expect(encryptor.caesarCipherEncryptor('xyz', 5)).to.deep.equal('cde');
    });

    it('Test Case #5', function() {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 26)).to.deep.equal('abc');
    });

    it('Test Case #6', function() {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 52)).to.deep.equal('abc');
    });

    it('Test Case #7', function() {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 57)).to.deep.equal('fgh');
    });

});
