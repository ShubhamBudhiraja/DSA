import { Node } from "../../concepts/tree/common.js";

const getMaxHeight = (root) => {
    if (root) {
        if (root.left === null && root.right === null) return 1;
        return Math.max(
            1 + getMaxHeight(root?.left),
            1 + getMaxHeight(root?.right)
        );
    } else return 0;
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

console.log(getMaxHeight(root));
