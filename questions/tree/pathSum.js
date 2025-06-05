// given the root of a binary tree and an integer targetSum. Determine whether the tree has any root-to-leaf path
// such that the sum of the values along the path equals targetSum
import { Node } from "../../concepts/tree/common.js";

const hasPathSum = (root, target) => {
    if (!root) return false;

    if (!root.left && !root.right) {
        return target === root.value;
    }

    return (
        hasPathSum(root.left, target - root.value) ||
        hasPathSum(root.right, target - root.value)
    );
};

const root = new Node(5);

root.left = new Node(4);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

root.right = new Node(8);
root.right.left = new Node(13);
root.right.right = new Node(4);

console.log(checkPath(root, 26));
