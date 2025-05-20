// root before children

import { Node } from "./common.js";

const preorderTraversal = (root) => {
    console.log(root.value);
    if (root.left) preorderTraversal(root.left);
    if (root.right) preorderTraversal(root.right);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.left = new Node(12);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

preorderTraversal(root);
