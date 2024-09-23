// twoSumSorted.test.js

const twoSumSorted = require('./app');
describe('twoSumSorted', () => {
    test('returns true when target sum exists', () => {
        const arr = [1, 2, 4, 6, 8, 9, 14, 15];
        const target = 13;
        expect(twoSumSorted(arr, target)).toBe(true);
    });

    test('returns false when target sum does not exist', () => {
        const arr = [1, 2, 4, 6, 8, 9, 14, 15];
        const target = 68;
        expect(twoSumSorted(arr, target)).toBe(false);
    });

    test('returns false for an empty array', () => {
        const arr = [];
        const target = 5;
        expect(twoSumSorted(arr, target)).toBe(false);
    });

    test('returns false for an array with one element', () => {
        const arr = [5];
        const target = 5;
        expect(twoSumSorted(arr, target)).toBe(false);
    });

    test('returns true for an array with two elements that sum to target', () => {
        const arr = [5, 8];
        const target = 13;
        expect(twoSumSorted(arr, target)).toBe(true);
    });

    test('returns false for an array with two elements that do not sum to target', () => {
        const arr = [5, 8];
        const target = 10;
        expect(twoSumSorted(arr, target)).toBe(false);
    });
});