import { Node } from "../../concepts/tree/common.js";

const helper = (leftRoot, rightRoot) => {
    if (!leftRoot && !rightRoot) return true;
    if (!leftRoot || !rightRoot) return false;

    return (
        leftRoot.value === rightRoot.value &&
        helper(leftRoot?.left, rightRoot?.right) &&
        helper(leftRoot?.right, rightRoot?.left)
    );
};

const checkSymmetric = (root) => {
    if (!root) return false;
    return helper(root.left, root.right);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(3);
root.left.left = new Node(5);
root.right.right = new Node(5);

console.log(checkSymmetric(root));
