const isPalindrome = require('./app'); 


test('racecar is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('hello is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('empty string is a palindrome', () => {
    expect(isPalindrome('')).toBe(true);
});

test('single character string is a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(false);
});