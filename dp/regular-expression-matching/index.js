/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = new Array(s.length + 1);
    for (let i = 0; i <= s.length; ++i) {
      dp[i] = (new Array(p.length + 1)).fill(false)
    }
    
    // base case
    dp[0][0] = true;
    for (let i = 0; i < p.length; ++i) {
      if (p[i] === '*') {
        dp[0][i+1] = dp[0][i-1];
      }
    }
    
    for (let i = 0; i < s.length; ++i) {
      for (let j = 0; j < p.length; ++j) {
        if (p[j] === s[i] || p[j] === '.') {
          dp[i+1][j+1] = dp[i][j];
        }
        
        if (p[j] === '*') {
          if (p[j-1] !== s[i] && p[j-1] !== '.') {
            // 0 occurrence
            dp[i+1][j+1] = dp[i+1][j-1];
          } else {
            // 1 occurrence dp[i+1][j]
            // n occurrence dp[i][j-1]
            dp[i+1][j+1] = (dp[i][j+1] || dp[i+1][j-1] || dp[i+1][j]);
          }
        }
      }
    }
    
    return !!dp[s.length][p.length];
  };