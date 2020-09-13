function isValid(root) {
    function helper(root, min, max) {

        if (root === null) return true;
        if (root.val <= min || root.val >= max) {
            return false 
        }
        const l = helper(root.left, min, root.val)
        const r = helper(root.right, root.val, max)
        
        
        return (r && l)
    }
    
    return helper(root, -Infinity, Infinity)
}