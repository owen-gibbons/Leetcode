int removeDuplicates(int* nums, int numsSize) {
    int* newNums = nums;
    int k = 1;
    for(int i = 1; i < numsSize; i++) {
        if(nums[i] > nums[i-1]) {
            newNums[k] = nums[i];
            k++;
        }
    }
    for(int i = 0; i < k; i++) {
        nums[i] = newNums[i];
    }
    return k;
}