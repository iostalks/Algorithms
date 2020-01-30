class Solution {
public:
    int longestValidParentheses(string s) {
        int longest = 0;
        // 使用 vector 模拟栈，存储接下来遇到的匹配括号的长度
        vector<int> stk;
        stk.push_back(0);
        for (auto ch : s) {
            if (ch == '(') {
                stk.push_back(0);
            }
            else {
                if (stk.size() > 1) {
                    int v = stk.back(); stk.pop_back();
                    int lastCount = stk[stk.size() - 1];
                    stk[stk.size() - 1] = lastCount + v + 2;
                    longest = max(longest, stk[stk.size() - 1]);
                }
                else {
                    stk.clear(); stk.push_back(0);
                }
            }
        }
        return longest;
    }
};