class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int size = nums.size();
        k %= size;
        if(k == 0) return;
        vector<int> newNums(size);
        for (int i = 0; i < size; i++) {
            newNums[(i + k) % (size)] = nums[i];
        }
        nums = newNums;
    }
};