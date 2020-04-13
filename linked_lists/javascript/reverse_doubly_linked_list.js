/*
space: store currentNode so O(1)
time: need to traverse all nodes twice so O(2n) or O(n)
*/

function reverse(head) {
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  head = currentNode;
  head.next = head.prev;
  head.prev = null;

  currentNode = head.next;
  while (currentNode !== null) {
    let temp = currentNode.prev;
    currentNode.prev = currentNode.next;
    currentNode.next = temp;
    currentNode = currentNode.next;
  }
  return head;
}
