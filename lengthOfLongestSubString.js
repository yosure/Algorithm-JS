var s= 'abcdab123456cbb'
var lengthOfLongestSubString = function(s){
    let max = 0
    let arry = []
    for(let i=0;i<s.length;i++){
        let index = arry.indexOf(s[i])
        if(index !==-1){
           arry.splice(0,index+1)
        }
        arry.push(s.charAt(i))
        max = Math.max(arry.length,max)
        
        
    }
    return max
}
console.log(lengthOfLongestSubString(s))