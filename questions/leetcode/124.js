// we have to calculate the maximum path sum in the binary tree. it is NOT mandatory to include all nodes

import { Node } from "../../concepts/tree/common.js";

const getLeaf = () => {
    if (root.left === null && root.right === null) return root;
};

const maxPathSum = (root) => {
    let res = root.value;

    const helper = (root) => {
        if (!root) return 0;
        const leftMax = Math.max(helper(root.left), 0);
        const rightMax = Math.max(helper(root.right), 0);

        res = Math.max(res, root.value + leftMax + rightMax);

        return root.value + Math.max(leftMax, rightMax);
    };

    helper(root);
    return res;
};

const root = new Node(-1);
root.left = new Node(-2);
// root.right = new Node(3);

console.log(maxPathSum(root, 0));
