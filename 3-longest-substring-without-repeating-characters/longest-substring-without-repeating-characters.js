/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stringLength = s.length
    let foundCharacters = []
    let currentSubstringLength = 0
    let longestSubstringLength = 0
    for (let i = 0; i < stringLength; i++) {
        let j = i
        while (!foundCharacters.includes(s[j])) {
            currentSubstringLength += 1
            foundCharacters.push(s[j])
            j += 1
            if (j == stringLength) break
        }
        if (currentSubstringLength > longestSubstringLength) longestSubstringLength = currentSubstringLength
        currentSubstringLength = 0
        foundCharacters = []
    }
    return longestSubstringLength
};