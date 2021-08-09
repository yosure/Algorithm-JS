var preorderTraversal = function(root) {
    var res = []
    var inorder = (root) => {
        if(!root){
            return
        }
        inorder(root.left)
        inorder(root.right)
        res.push(root.val)        
    }
    inorder(root)
    return res
};