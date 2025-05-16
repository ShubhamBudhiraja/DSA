// traverses all nodes by level
import { Node } from "./common.js";

const levelOrdertraversal = (root) => {
    const queue = [root];
    const result = [];
    let level = 0;

    while (queue.length) {
        let l = queue.length;
        result.push([]);
        for (let i = 0; i < l; i++) {
            const node = queue.shift();
            result[level].push(node.value);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        level++;
    }

    return result;
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right.right = new Node(7);
root.right.left = new Node(6);

console.log(levelOrdertraversal(root));
