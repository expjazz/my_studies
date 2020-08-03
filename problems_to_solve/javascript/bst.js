/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    const result = [];
    let tempResult = [];
    queue.push(root);
    let rememberParent = [];
    while (queue.length > 0) {
        const temp = queue.shift();
        console.log(temp.val);
        console.log(temp.children);
        if (temp.children.length > 0) rememberParent.push(temp.children.length);
        console.log(rememberParent)

        if (result.length === 0) {
            result.push([temp.val])
        } else {
        if (rememberParent[0] > 0) {
            tempResult.push(temp.val);
            rememberParent[0] -= 1;
            if (rememberParent[0] === 0) {
                rememberParent.shift()
                result.push(tempResult);
                tempResult = [];

            }
        }}
        if (temp.children.length > 0) {
            queue = [...queue, ...temp.children]
        }
    }
    return result
    
};
