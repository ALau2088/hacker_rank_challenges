function sortedInsert(head, data) {
  // Naive solution traverse entire list
  // edge case - data is smaller than head data
  if (data < head.data) {
    let temp = head;
    head = new DoublyLinkedListNode(data);
    head.next = temp;
    return head;
  }

  let currentNode = head;

  while (data > currentNode.next.data) {
    currentNode = currentNode.next;
    if (currentNode.next === null) break;
  }
  let temp = currentNode.next;
  currentNode.next = new DoublyLinkedListNode(data);
  currentNode.next.next = temp;
  currentNode.next.prev = currentNode;

  return head;
}
