/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length == 0){
        return -1;
    }
    if(nums.length == 1){
        return nums[0] == target? 0 : -1;
    }

    var left = 0, right = nums.length - 1;
    while(left < right){
        var mid = parseInt((left + right) / 2);
        if(nums[mid] === target){
            return mid;
        }else{
            if(nums[left] <= nums[mid]){
                if(nums[left] <= target && target <= nums[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }else{
                if(nums[mid + 1] <= target && target <= nums[right]){
                    left = mid + 1;
                }else {
                    right = mid - 1;
                }
            }
        }
    }
    return nums[left] === target ? left : -1;
};