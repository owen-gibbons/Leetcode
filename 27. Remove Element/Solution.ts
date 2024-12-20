function removeElement(nums: number[], val: number): number {
    let k = 0;
    const newArr = nums.filter(x => x !== val);
    k = newArr.length;
    for(let i = newArr.length-1; i < nums.length; i++) {
        newArr.push(val);
    }
    for(let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }
    return k;
};