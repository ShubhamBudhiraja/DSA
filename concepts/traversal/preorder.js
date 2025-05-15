// root before children
class Node {
    value = null;
    left = null;
    right = null;

    constructor(val) {
        this.value = val;
    }
}

const preorderTraversal = (root) => {
    console.log(root.value);
    if (root.left) preorderTraversal(root.left);
    if (root.right) preorderTraversal(root.right);
};

const root = new Node(2);
root.right = new Node(3);
root.left = new Node(1);
root.left.left = new Node(12);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

preorderTraversal(root);
