function closest(tree, target) {
  return helper(tree, target, Infinity)
}

function helper(tree, target, closest) {
  if (!tree) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.data)) {
    closest = tree.data;
  }
  if (target > tree.data) {
    return helper(tree.right, target, closest)
  } else if (target < tree.data) {
    return helper(tree.left, target, closest)
  } else {
    return closest
  }
}