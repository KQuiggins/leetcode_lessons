// Import the function to be tested
const reverseString = require('./reverse_string');

// Test suite for reverseString function
describe('reverseString', () => {
  // Test case 1: Normal string
  test('reverses a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  // Test case 2: Empty string
  test('reverses an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  // Test case 3: String with spaces
  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  // Test case 4: String with special characters
  test('reverses a string with special characters', () => {
    expect(reverseString('!@#')).toBe('#@!');
  });

  // Test case 5: String with numbers
  test('reverses a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });
});