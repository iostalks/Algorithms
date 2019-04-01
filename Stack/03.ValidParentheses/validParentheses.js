const dict = {
    ')': '(',
    ']': '[',
    '}': '{',
}

var isValid = function(s) {
    if (!s) return true;
    let stack = [];
    for (let i = 0; i < s.length; ++i) {
        const c = s[i];
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (dict[c] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length == 0;
};

