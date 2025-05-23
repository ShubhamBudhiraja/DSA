// find the lowest common ancestor
// The Lowest Common Ancestor (LCA) of two nodes p and q in a binary tree is the lowest (deepest) node in the tree
// that has both p and q as descendants (where a node can be a descendant of itself).
import { Node } from "../../concepts/tree/common.js";

const lca = (root, node1, node2) => {
    if (!root || root.value === node1 || root.value === node2) return root;

    const left = lca(root.left, node1, node2);
    const right = lca(root.right, node1, node2);

    if (left && right) return root;

    return left || right;
};

const root = new Node(5);

root.left = new Node(4);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

root.right = new Node(8);
root.right.left = new Node(13);
root.right.right = new Node(4);

console.log(lca(root, 11, 13));
