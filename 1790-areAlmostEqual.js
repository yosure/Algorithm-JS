var s1 = 'bank',s2 = 'kanb'
var areAlmostEqual = function(s1,s2){
    if(s1 === s2) return true;
    let diff = []
    let i = s1.length
    while(i--){
        if(s1.charAt(i) !== s2.charAt(i)){
            diff.push([s1.charAt(i),s2.charAt(i)])
        }
    }
    //若存在，不同项集合diff长度为2，且对位交叉相等
    return diff.length === 2 && diff[0][0]===diff[1][1] && diff[0][1]===diff[1][0]
}
console.log(areAlmostEqual(s1,s2))