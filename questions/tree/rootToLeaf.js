// get all root-to-leaf paths
import { Node } from "../../concepts/tree/common.js";

const helper = (path, node, result) => {
    if (!node?.left && !node?.right) {
        result.push([...path, node.value].join(" -> "));
        return;
    }

    if (node?.left) helper([...path, node.value], node.left, result);
    if (node?.right) helper([...path, node.value], node.right, result);
};

const getPaths = (root) => {
    const result = [];
    helper([], root, result);

    console.log(result);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right.right = new Node(7);
root.right.left = new Node(6);
root.right.left.left = new Node(8);
root.right.left.left.right = new Node(9);

getPaths(root);
