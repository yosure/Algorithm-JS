  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  var l5 = new TreeNode(7,undefined,undefined)
  var l4 = new TreeNode(15,undefined,undefined)
  var l3 = new TreeNode(20,l4,l5)
  var l2 = new TreeNode(9,undefined,undefined)
  var root = new TreeNode(3,l2,l3)

 var levelOrder = function(root) {
     let res =[],queue=[]
     queue.push(root)
     if(root === null){
         return res
     }
     while(queue.length !==0){
         let length = queue.length;
         let currLevel = [];
         for(let i=0;i<length;i++){
             let node = queue.shift();
             currLevel.push(node.val);
             node.left&&queue.push(node.left)
             node.right&&queue.push(node.right)
         }
         res.push(currLevel)
     }
     return res
};

console.log(levelOrder(root))