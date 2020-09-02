const program = require('../src/validate_subsequence');
const chai = require('chai');
describe('Validate subsequence tests', () => {
    describe('first version', () => {
        it('should return true #1', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #2', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #3', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #4', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [22, 25, 6];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #5', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #6', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #7', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #8', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [25];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #9', () => {
            const array = [1, 1, 1, 1, 1];
            const sequence = [1, 1, 1];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return false #1', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #2', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [4, 5, 1, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #3', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 23, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #4', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #5', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 22, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #6', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -1];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #7', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -1, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #8', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -2];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #9', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [26];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #10', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 25, 22, 6, -1, 8, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #11', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 26, 22, 8];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #12', () => {
            const array = [1, 1, 6, 1];
            const sequence = [1, 1, 1, 6];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #13', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, 10, 11, 11, 11, 11];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #14', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isFalse(result);
        })
    });
    describe('second version', () => {
        it('should return true #1', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, 10];

            const result = program.validateSubsequence(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #2', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #3', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #4', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [22, 25, 6];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #5', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #6', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #7', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #8', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [25];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return true #9', () => {
            const array = [1, 1, 1, 1, 1];
            const sequence = [1, 1, 1];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isTrue(result);
        });
        it('should return false #1', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #2', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [4, 5, 1, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #3', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 23, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #4', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 22, 25, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #5', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 22, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #6', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -1];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #7', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -1, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #8', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, -2];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #9', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [26];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #10', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 25, 22, 6, -1, 8, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #11', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 26, 22, 8];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #12', () => {
            const array = [1, 1, 6, 1];
            const sequence = [1, 1, 1, 6];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #13', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [1, 6, -1, 10, 11, 11, 11, 11];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        });
        it('should return false #14', () => {
            const array = [5, 1, 22, 25, 6, -1, 8, 10];
            const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 10];

            const result = program.validateSubsequenceWithWhileLoop(array, sequence);

            chai.assert.isFalse(result);
        })
    });
});
