const chai = require('chai');
const encryptor = require('../src/caesar_cipher_encryptor');

describe('Ceaser cipher encryptor tests', () => {
    it('Test Case #1', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 0)).to.deep.equal('abc');
    });

    it('Test Case #2', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 3)).to.deep.equal('def');
    });

    it('Test Case #3', () => {
        chai.expect(encryptor.caesarCipherEncryptor('xyz', 2)).to.deep.equal('zab');
    });

    it('Test Case #4', () => {
        chai.expect(encryptor.caesarCipherEncryptor('xyz', 5)).to.deep.equal('cde');
    });

    it('Test Case #5', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 26)).to.deep.equal('abc');
    });

    it('Test Case #6', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 52)).to.deep.equal('abc');
    });

    it('Test Case #7', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', 57)).to.deep.equal('fgh');
    });

    it('Test Case #8', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', -2)).to.deep.equal('yza');
    });

    it('Test Case #9', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', -10)).to.deep.equal('qrs');
    });

    it('Test Case #10', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', -26)).to.deep.equal('abc');
    });

    it('Test Case #11', () => {
        chai.expect(encryptor.caesarCipherEncryptor('abc', -52)).to.deep.equal('abc');
    });

});
