var nums = [1,3,4,2,2]
var findDuplicate = function(nums) {
    const n=nums.length;
    let l=1,r=n-1,ans=-1
    while(l<=r){
        let mid = (l+r)>>1
        let cnt=0;
        for(let i=0;i<n;i++){
            if(nums[i]<=mid){
                cnt++;
            }
        }
        if(cnt<=mid){
            l=mid+1
        }else{
            r=mid-1
            ans=mid
        }
    }
    return ans
};

console.log(findDuplicate(nums))