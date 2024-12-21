function removeElement(nums: number[], val: number): number {
    const newArr = nums.filter(x => x !== val);
    for(let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i];
    }
    return newArr.length;
};