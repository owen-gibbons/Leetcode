/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    let max = undefined;
    for(let number of nums) {
        if(!counts.hasOwnProperty(number)) {
            counts[number] = 1;
        } else {
            counts[number]++;
        }
        if(max === undefined || counts[number] > counts[max]) {
            max = number;
        }
    }
    return max;
};