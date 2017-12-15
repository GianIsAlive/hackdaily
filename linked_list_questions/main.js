// Create a function that deletes a node of a specific value from Linked List

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteNode(head, val) {
  if (head.value === val) {
    return head.next;
  }
  while (head.next) {
    if (head.next.value === val) {
      if (head.next.next !== null) {
        head.next = head.next.next;
        return head;
      } else {
        head.next = null;
        return head;
      }
    }
    head = head.next;
  }
  return head;
}
