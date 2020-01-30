class Solution {
public:
    bool isValid(string s) {
        stack<char> myStack;
        for(auto ch : s) {
            if(ch == '(' || ch == '[' || ch == '{') {
                myStack.push(ch);
            }
            else {
                if(myStack.empty()) { return false; }
                auto top_ch = myStack.top();
                if((top_ch == '(' && ch == ')') || (top_ch == '[' && ch == ']') || (top_ch == '{' && ch == '}')) {
                    myStack.pop();
                }
                else { return false; }
            }
        }
        return myStack.empty();
    }
};