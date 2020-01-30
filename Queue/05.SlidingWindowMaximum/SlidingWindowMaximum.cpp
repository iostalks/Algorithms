class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> res;
        deque<int> que;
        for (int i =0; i < nums.size(); ++i) {
            if (!que.empty() && que.front() == i - k) // 队列头超出滑动窗口
                que.pop_front();
            while (!que.empty() && nums[i] >= nums[que.back()]) // 删除队列尾元素，直到大于当前元素的元素
                que.pop_back();
            que.push_back(i); // 当前元素入队
            if (i >= k - 1)
                res.push_back(nums[que.front()]);
        }
        return res;
    }
};