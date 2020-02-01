const pairSum = require('../src/pair_sum');
const chai = require('chai');

describe('Pair sum tests', () => {
    describe('first version of an implementation', () => {
        it('should return an empty array if no pair has been found 1', () => {
            chai.expect(pairSum.findPairWithSum([23,4,5,2,7,8,45,678,0], 123123)).to.deep.equal([]);
        });
        it('should return an empty array if no pair has been found 2', function() {
            const output = pairSum.findPairWithSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return an empty array if no pair has been found 3', function() {
            const output = pairSum.findPairWithSum([3, 5, -4, 8, 11, 1, -1, 6], 15).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return a pair of founded numbers 1', () => {
            chai.expect(pairSum.findPairWithSum([23,4,5,2,7,8,45,678,0], 9)).to.deep.equal([4,5]);
        });

        it('should return a pair of founded numbers 2', function() {
            const output = pairSum.findPairWithSum([4, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([4, 6]);
        });

        it('should return a pair of founded numbers 3', function() {
            const output = pairSum.findPairWithSum([4, 6, 1], 5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([1, 4]);
        });

        it('should return a pair of founded numbers 4', function() {
            const output = pairSum.findPairWithSum([4, 6, 1, -3], 3).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-3, 6]);
        });

        it('should return a pair of founded numbers 5', function() {
            const output = pairSum.findPairWithSum([3, 5, -4, 8, 11, 1, -1, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-1, 11]);
        });

        it('should return a pair of founded numbers 6', function() {
            const output = pairSum.findPairWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([8, 9]);
        });

        it('should return a pair of founded numbers 7', function() {
            const output = pairSum.findPairWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([3, 15]);
        });

        it('should return a pair of founded numbers 8', function() {
            const output = pairSum.findPairWithSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-5, 0]);
        });

        it('should return a pair of founded numbers 9', function() {
            const output = pairSum.findPairWithSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-47, 210]);
        });
    });

    describe('second version of an implementation with cache', () => {
        it('should return an empty array if no pair has been found 1', () => {
            chai.expect(pairSum.findPairWithSumWithCache([23,4,5,2,7,8,45,678,0], 123123)).to.deep.equal([]);
        });
        it('should return an empty array if no pair has been found 2', function() {
            const output = pairSum.findPairWithSumWithCache([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return an empty array if no pair has been found 3', function() {
            const output = pairSum.findPairWithSumWithCache([3, 5, -4, 8, 11, 1, -1, 6], 15).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return a pair of founded numbers 1', () => {
            chai.expect(pairSum.findPairWithSumWithCache([23,4,5,2,7,8,45,678,0], 9)).to.deep.equal([4,5]);
        });

        it('should return a pair of founded numbers 2', function() {
            const output = pairSum.findPairWithSumWithCache([4, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([4, 6]);
        });

        it('should return a pair of founded numbers 3', function() {
            const output = pairSum.findPairWithSumWithCache([4, 6, 1], 5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([1, 4]);
        });

        it('should return a pair of founded numbers 4', function() {
            const output = pairSum.findPairWithSumWithCache([4, 6, 1, -3], 3).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-3, 6]);
        });

        it('should return a pair of founded numbers 5', function() {
            const output = pairSum.findPairWithSumWithCache([3, 5, -4, 8, 11, 1, -1, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-1, 11]);
        });

        it('should return a pair of founded numbers 6', function() {
            const output = pairSum.findPairWithSumWithCache([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([8, 9]);
        });

        it('should return a pair of founded numbers 7', function() {
            const output = pairSum.findPairWithSumWithCache([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([3, 15]);
        });

        it('should return a pair of founded numbers 8', function() {
            const output = pairSum.findPairWithSumWithCache([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-5, 0]);
        });

        it('should return a pair of founded numbers 9', function() {
            const output = pairSum.findPairWithSumWithCache([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-47, 210]);
        });
    });


    describe('third version of an implementation ', () => {
        it('should return an empty array if no pair has been found 1', () => {
            chai.expect(pairSum.findPairWithSumIterative([23,4,5,2,7,8,45,678,0], 123123)).to.deep.equal([]);
        });
        it('should return an empty array if no pair has been found 2', function() {
            const output = pairSum.findPairWithSumIterative([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return an empty array if no pair has been found 3', function() {
            const output = pairSum.findPairWithSumIterative([3, 5, -4, 8, 11, 1, -1, 6], 15).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([]);
        });

        it('should return a pair of founded numbers 1', () => {
            chai.expect(pairSum.findPairWithSumIterative([23,4,5,2,7,8,45,678,0], 9)).to.deep.equal([2,7]);
        });

        it('should return a pair of founded numbers 2', function() {
            const output = pairSum.findPairWithSumIterative([4, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([4, 6]);
        });

        it('should return a pair of founded numbers 3', function() {
            const output = pairSum.findPairWithSumIterative([4, 6, 1], 5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([1, 4]);
        });

        it('should return a pair of founded numbers 4', function() {
            const output = pairSum.findPairWithSumIterative([4, 6, 1, -3], 3).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-3, 6]);
        });

        it('should return a pair of founded numbers 5', function() {
            const output = pairSum.findPairWithSumIterative([3, 5, -4, 8, 11, 1, -1, 6], 10).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-1, 11]);
        });

        it('should return a pair of founded numbers 6', function() {
            const output = pairSum.findPairWithSumIterative([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([8, 9]);
        });

        it('should return a pair of founded numbers 7', function() {
            const output = pairSum.findPairWithSumIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([3, 15]);
        });

        it('should return a pair of founded numbers 8', function() {
            const output = pairSum.findPairWithSumIterative([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-5, 0]);
        });

        it('should return a pair of founded numbers 9', function() {
            const output = pairSum.findPairWithSumIterative([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163).sort((a, b) => a - b);
            chai.expect(output).to.deep.equal([-47, 210]);
        });
    });
});