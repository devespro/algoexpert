const fibonacci = require('../src/fibonacci');
const chai = require('chai');

describe('Fibonacci tests', () => {
    describe('recursive version without caching', () => {
        it('should return 0 for input 1', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(1), 0);
        });

        it('should return 1 for input 2', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(2), 1);
        });

        it('should return 0 for for invalid input', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(-1), 0);
        });

        it('should return 1 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(3), 1);
        });

        it('should return 2 for input 4', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(4), 2);
        });

        it('should return 5 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(5), 3);
        });

        it('should return 5 for input 6', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(6), 5);
        });

        it('should return 8 for input 7', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(7), 8);
        });

        it('should return 13 for input 8', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(8), 13);
        });

        it('should return 21 for input 9', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(9), 21);
        });

        it('should return 34 for input 10', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(10), 34);
        });

        it('should return 55 for input 11', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(11), 55);
        });

        it('should return 89 for input 12', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(12), 89);
        });

        it('should return 144 for input 13', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(13), 144);
        });

        it('should return 233 for input 14', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(14), 233);
        });

        it('should return 377 for input 15', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(15), 377);
        });

        it('should return 610 for input 16', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(16), 610);
        });

        it('should return 987 for input 17', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(17), 987);
        });

        it('should return 1597 for input 18', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursive(18), 1597);
        });
    });

    describe('recursive version with caching', () => {
        it('should return 0 for input 1', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(1), 0);
        });

        it('should return 1 for input 2', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(2), 1);
        });

        it('should return 0 for for invalid input', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(-1), 0);
        });

        it('should return 1 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(3), 1);
        });

        it('should return 2 for input 4', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(4), 2);
        });

        it('should return 5 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(5), 3);
        });

        it('should return 5 for input 6', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(6), 5);
        });

        it('should return 8 for input 7', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(7), 8);
        });

        it('should return 13 for input 8', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(8), 13);
        });

        it('should return 21 for input 9', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(9), 21);
        });

        it('should return 34 for input 10', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(10), 34);
        });

        it('should return 55 for input 11', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(11), 55);
        });

        it('should return 89 for input 12', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(12), 89);
        });

        it('should return 144 for input 13', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(13), 144);
        });

        it('should return 233 for input 14', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(14), 233);
        });

        it('should return 377 for input 15', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(15), 377);
        });

        it('should return 610 for input 16', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(16), 610);
        });

        it('should return 987 for input 17', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(17), 987);
        });

        it('should return 1597 for input 18', () => {
            chai.assert.equal(fibonacci.getNthFibonacciRecursiveWithCache(18), 1597);
        });
    });
    describe('iterative version', () => {
        it('should return 0 for input 1', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(1), 0);
        });

        it('should return 1 for input 2', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(2), 1);
        });

        it('should return 0 for for invalid input', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(-1), 0);
        });

        it('should return 1 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(3), 1);
        });

        it('should return 2 for input 4', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(4), 2);
        });

        it('should return 5 for input 3', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(5), 3);
        });

        it('should return 5 for input 6', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(6), 5);
        });

        it('should return 8 for input 7', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(7), 8);
        });

        it('should return 13 for input 8', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(8), 13);
        });

        it('should return 21 for input 9', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(9), 21);
        });

        it('should return 34 for input 10', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(10), 34);
        });

        it('should return 55 for input 11', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(11), 55);
        });

        it('should return 89 for input 12', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(12), 89);
        });

        it('should return 144 for input 13', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(13), 144);
        });

        it('should return 233 for input 14', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(14), 233);
        });

        it('should return 377 for input 15', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(15), 377);
        });

        it('should return 610 for input 16', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(16), 610);
        });

        it('should return 987 for input 17', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(17), 987);
        });

        it('should return 1597 for input 18', () => {
            chai.assert.equal(fibonacci.getNthFibonacciIteratively(18), 1597);
        });
    });
});