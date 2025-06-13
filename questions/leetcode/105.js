// generate binary tree from preorder and inorder traversal

import { Node } from "../../concepts/tree/common.js";

const generateTree = (preOrder, inOrder) => {
    if (!preOrder.length || !inOrder.length) return null;

    const root = new Node(preOrder[0]);
    const rootIndex = inOrder.indexOf(preOrder[0]);

    const leftInOrder = inOrder.slice(0, rootIndex);
    const rightInOrder = inOrder.slice(rootIndex + 1);

    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1);

    root.left = generateTree(leftPreOrder, leftInOrder);
    root.right = generateTree(rightPreOrder, rightInOrder);

    return root;
};

const preOrderTraversal = [3, 9, 8, 20, 15, 7],
    inOrderTraversal = [9, 8, 3, 15, 20, 7];

console.log(generateTree(preOrderTraversal, inOrderTraversal));
