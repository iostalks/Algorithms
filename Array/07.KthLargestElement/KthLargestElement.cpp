
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return _quickSelect(nums, 0, nums.size()-1, k-1);
    }
    
    int _quickSelect(vector<int> nums, int left, int right, int k) {
        int origin_left = left, origin_right = right;
        int pivot = nums[origin_right];
        while (left < right) {
            while (left < right && nums[left] > pivot) { left++; }
            while (left < right && nums[right] <= pivot) { right--; }
            int tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
        }
        nums[origin_right] = nums[left];
        nums[left] = pivot;


        if (k == left) {
            return nums[left];
        }
        else if (k > left) {
            return _quickSelect(nums, left+1, origin_right, k);
        }
        else {
            return _quickSelect(nums, origin_left, left-1, k);
        }
    }
};