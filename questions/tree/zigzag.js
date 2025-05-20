import { Node } from "../../concepts/tree/common.js";

// zigzag tree traversal
const zigzagTraversal = (root) => {
    const queue = [root];
    const result = [];
    let level = 0;

    while (queue.length) {
        let qLength = queue.length;
        result.push([]);

        for (let i = 0; i < qLength; i++) {
            const node = queue.shift();

            if (level % 2 === 0) result[level].push(node.value);
            else result[level].unshift(node.value);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        level++;
    }

    return result;
};

const root = new Node(2);

root.left = new Node(1);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);
root.left.right.right = new Node(11);
root.right.left.left = new Node(12);
root.right.left.right = new Node(13);
root.right.right.left = new Node(14);
root.right.right.right = new Node(15);

console.log(zigzagTraversal(root));
