// Insert a node at a specific position in a linked list

function insertNodeAtPosition(head, data, position) {
  let counter = 1;
  let currentNode = head;
  //traverse to node position
  while (counter < position) {
    currentNode = currentNode.next;
    counter++;
  }
  // insert node
  let temp = currentNode.next;
  currentNode.next = new SinglyLinkedListNode(data);
  currentNode.next.next = temp;
  return head;
}
