function removeElement(nums: number[], val: number): number {
    const newArr = nums.filter(x => x !== val);
    const k = newArr.length;
    for(let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i];
    }
    return k;
};