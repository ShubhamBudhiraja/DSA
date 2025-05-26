// add two numbers
// two non-empty linked lists representing two non-negative integers andhe digits are stored in reverse order
// Add the two numbers and return the sum as a linked list.

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const traversal = (list, result) => {
    if (!list) return;
    result.push(list.value);
    traversal(list.next, result);
};

const helper = (list1, list2, carry = 0) => {
    if (!list1 && !list2 && carry === 0) return null;
    const node = new ListNode(0);
    const total = (list1?.value || 0) + (list2?.value || 0) + carry;
    node.value = total % 10;
    node.next = helper(list1?.next, list2?.next, total > 9 ? 1 : 0);

    return node;
};

const addNumbers = (list1, list2) => {
    return helper(list1, list2, 0);
};

const list1 = new ListNode(9);
list1.next = new ListNode(9);
list1.next.next = new ListNode(9);
list1.next.next.next = new ListNode(9);
list1.next.next.next.next = new ListNode(9);
list1.next.next.next.next.next = new ListNode(9);
list1.next.next.next.next.next.next = new ListNode(9);

const list2 = new ListNode(9);
list2.next = new ListNode(9);
list2.next.next = new ListNode(9);
list2.next.next.next = new ListNode(9);

const resultArray = [];
const result = addNumbers(list1, list2);

traversal(result, resultArray);
console.log(result, resultArray);
