import { Node } from "../../concepts/tree/common.js";

const invert = (root) => {
    if (!root) return null;

    const temp = root.left;
    root.left = invert(root.right);
    root.right = invert(temp);

    return root;
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(5);
root.left.left = new Node(7);

console.log(root);
invert(root);
console.log(root);
