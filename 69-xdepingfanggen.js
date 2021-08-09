/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
     let l=0,r=x,ans=-1
     while(l<=r){
         let  mid1  = l + (r-l)/2;
         mid = parseInt(mid1)
         if(mid*mid <= x){
             ans = mid;
             l = mid + 1;
         }else{
             r = mid -1
         }
     }
    return ans
};

console.log(mySqrt(8))