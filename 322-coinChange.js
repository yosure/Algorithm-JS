/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
     let dp = new Array(amount +1).fill(Infinity)
      dp[0] = 0
      for(let i =1;i<=amount;i++){
          coins.forEach((coin)=>{
              if(i-coin >=0){
                  dp[i]=Math.min(dp[i],dp[i-1]+1)
              }
 
          })
      }
      return dp[amount]===Infinity?-1:dp[amount]
};