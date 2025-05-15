// root in-between
class Node {
    value = null;
    left = null;
    right = null;

    constructor(val) {
        this.value = val;
    }
}

const inorderTraversal = (root) => {
    if (root.left) inorderTraversal(root.left);
    console.log(root.value);
    if (root.right) inorderTraversal(root.right);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.left = new Node(12);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

inorderTraversal(root);
