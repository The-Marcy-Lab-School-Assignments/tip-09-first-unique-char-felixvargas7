/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns 
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2  
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (s) => {
    const frequency = {};
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (frequency[str] === undefined) {
            frequency[str] = 1
        } else {
            frequency[str] += 1
        }
        return frequency[str];
    }
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
    }
    if (frequency[str] === 1) {
        return i;
    }
    return -1;
};

// Export the function for testing
module.exports = { firstUniqChar };

// Example usage (commented out to avoid interference with tests)
// console.log(firstUniqChar("leetcode")); // → 0
// console.log(firstUniqChar("loveleetcode")); // → 2
// console.log(firstUniqChar("aabb")); // → -1
