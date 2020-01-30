/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */

 // Time: O(n^2)
 var longestPalindrome = function(s) {
    // 检测字符串 s 是否是回文
    const isPalindrome = (s) => {
        for (let i = 0, len = s.length; i < parseInt(len/2); ++i) {
            if (s.charAt(i) === s.charAt(len - i - 1)) {
                continue;
            }
            return false;
        }
        return true;
    }

    let longestPal = '';
    for (let i = 0, len = s.length; i < len; ++i) {
        for (let j = i + 1; j <= len; ++j) {
            const ts = s.slice(i, j);
            if (ts.length > longestPal.length && isPalindrome(ts)) {
                longestPal = ts;
            }
        }
    }

    return longestPal;
};

// Time: O(n*m)
var longestPalindrome2 = function(s) {
    const len = s.length;
    let start = maxLen = 0;

    // 最长回文探测
    const palindromeDetect = (s, left, right) => {
        while (left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        }
        if (maxLen < right - left - 1) {
            start = left + 1;
            maxLen = right - left - 1;
        }
    }

    for (let i = 0; i <= len - 1; ++i) {
        palindromeDetect(s, i, i); // 奇数长度
        palindromeDetect(s, i, i+1); // 偶数长度
    }

    return s.slice(start, start + maxLen);
}