// root after children
import { Node } from "./common.js";

const postorderTraversal = (root) => {
    if (root.left) postorderTraversal(root.left);
    if (root.right) postorderTraversal(root.right);
    console.log(root.value);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.left = new Node(12);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

postorderTraversal(root);
