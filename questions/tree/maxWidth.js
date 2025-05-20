import { Node } from "../../concepts/tree/common.js";

const getMaxWidth = (root) => {
    if (root.left === null && root.right === null) return 1;

    let maxHeight = 0;
    const queue = [root];

    while (queue.length) {
        const levelWidth = queue.length;
        maxHeight = Math.max(maxHeight, levelWidth);

        for (let i = 0; i < levelWidth; i++) {
            const curNode = queue.shift();

            if (curNode.left !== null) queue.push(curNode.left);
            if (curNode.right !== null) queue.push(curNode.right);
        }
    }

    return maxHeight;
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right.left = new Node(6);
root.right.left.left = new Node(8);
root.right.left.left.right = new Node(9);

console.log(getMaxWidth(root));
