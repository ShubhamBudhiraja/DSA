import { Node } from "../../concepts/tree/common.js";

const checkIdentical = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;

    return (
        root1.value === root2.value &&
        checkIdentical(root1.left, root2.left) &&
        checkIdentical(root1.right, root2.right)
    );
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.right = new Node(5);
root.left.left = new Node(4);

const root2 = new Node(2);
root2.right = new Node(3);
root2.left = new Node(1);
root2.left.right = new Node(5);

console.log(checkIdentical(root, root2));
