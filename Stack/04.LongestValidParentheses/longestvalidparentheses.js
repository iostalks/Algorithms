var longestvalidparentheses = function(s) {
    let longest = 0;
    // 栈用来存储接下来遇到的匹配括号的长度
    let stk = [0];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            stk.push(0);
        } else {
            if (stk.length > 1) {
                let v = stk.pop();
                // 取出第一个元素
                let lastCount = stk[stk.length - 1];
                stk[stk.length - 1] = lastCount + v + 2;
                longest = Math.max(longest, stk[stk.length - 1]);
            } else {
                stk = [0];
            }
        }
    }
    return longest;
}

