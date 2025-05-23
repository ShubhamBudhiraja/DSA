// given the root of a binary tree and an integer targetSum. Determine whether the tree has any root-to-leaf path
// such that the sum of the values along the path equals targetSum
import { Node } from "../../concepts/tree/common.js";

const checkPath = (root, target) => {
    if (target < 0) return false;
    if (target === 0) return true;

    if (root)
        return (
            checkPath(root?.left, target - root?.value) ||
            checkPath(root?.right, target - root?.value)
        );
    return false;
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
