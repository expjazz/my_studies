var binaryTreePaths = function(root) {
  const r = []
  let str = ''
  helper(root, r, str)
  return r
};

function helper(root, arr, str) {
  if (!root) return;
  if (!root.right && !root.left) {
      newStr = str += `${root.val}`
      console.log(newStr)
      arr.push(newStr)
  } else {
      str += `${root.val}->`
  }
  helper(root.left, arr, str)
  helper(root.right, arr, str)
  str = str.slice(0, [str.length - 4])
}