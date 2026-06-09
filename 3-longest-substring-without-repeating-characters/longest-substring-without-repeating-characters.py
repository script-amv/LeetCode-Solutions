class Solution:
    def lengthOfLongestSubstring(self, str: str) -> int:
        charSet = set()
        left = 0
        charSetLen = 0
        for right in str:
            while right in charSet:
                charSet.discard(str[left])
                left += 1
            charSet.add(right)
            charSetLen = max(charSetLen, len(charSet))
        return charSetLen