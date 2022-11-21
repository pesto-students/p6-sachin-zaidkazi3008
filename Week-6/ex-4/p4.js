/*
Best time to buy and sell stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 
Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 
Example 2: Input: prices =[7,6,4,3,1] Output: 0
Explanation: In this case, no transactions are done and the max profit = 0
Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104
*/


function returnProfit(prices){
    max_profit = 0;
    for(let i = prices.length-1; i >=0;i--){ //O(n)
        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){  //O(n)
            if(prices[i]-prices[j]>max_profit){
                max_profit=prices[i]-prices[j]
            }
        }
    };
    return max_profit
}

console.log(returnProfit([7,1,5,3,6,4]));
console.log(returnProfit([7,6,4,3,1]));


// TC : O(n^2)