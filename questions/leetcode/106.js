// generate binary tree from postorder and inorder traversal

import { Node } from "../../concepts/tree/common.js";

const generateTree = (postOrder, inOrder) => {
    if (!postOrder.length || !inOrder.length) return null;

    const rootValue = postOrder[postOrder.length - 1];
    const root = new Node(rootValue);
    const rootIndex = inOrder.indexOf(rootValue);

    const leftInOrder = inOrder.slice(0, rootIndex);
    const rightInOrder = inOrder.slice(rootIndex + 1);

    const leftPostOrder = postOrder.slice(0, leftInOrder.length);
    const rightPostOrder = postOrder.slice(
        leftInOrder.length,
        postOrder.length - 1
    );

    root.left = generateTree(leftPostOrder, leftInOrder);
    root.right = generateTree(rightPostOrder, rightInOrder);

    return root;
};

const postOrderTraversal = [8, 9, 15, 7, 20, 3],
    inOrderTraversal = [9, 8, 3, 15, 20, 7];

console.log(generateTree(postOrderTraversal, inOrderTraversal));
