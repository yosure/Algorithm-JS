var nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let ans = nums[0]
    let sum = 0
    nums.forEach((num)=>{
        sum = Math.max(sum+num,num)
        ans = Math.max(ans,sum)
    })
    return ans
};
console.log(maxSubArray(nums))