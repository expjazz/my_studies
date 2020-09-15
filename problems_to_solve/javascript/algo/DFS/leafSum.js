var sumNumbers = function(root) {
  return helper(root, 0)
  
};

function helper(root, sum) {
  if (!root) return 0;
  sum = sum + root.val;
  
  if (!root.left && !root.right) {
      return sum
  }
  return helper(root.left, sum * 10) + helper(root.right, sum * 10)
  
  
}