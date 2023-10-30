/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function helper(node, min, max) {
        if (node === null) {
            return true;
        }
        
        const value = node.val;
        
        if (value <= min || value >= max) {
            return false;
        }
        
        return helper(node.left, min, value) && helper(node.right, value, max);
    }
    
    return helper(root, -Infinity, Infinity)
};