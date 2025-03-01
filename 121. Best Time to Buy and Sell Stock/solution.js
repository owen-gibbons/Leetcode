/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let minPrice = Infinity;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        max = Math.max(max, prices[i] - minPrice);
    }
    return max;
};