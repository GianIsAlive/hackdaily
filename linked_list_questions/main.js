function Node(val) {
  this.value = val;
  this.next = null;
}

// Create a function that deletes a node of a specific value from Linked List
function deleteNode(linkedList, val) {
  let head = linkedList;
  if (head.value === val) {
    return head.next;
  }
  while (head.next) {
    if (head.next.value === val) {
      head.next = head.next.next;
    }
    head = head.next;
  }
  return linkedList;
}

// Remove duplicate node from a unsorted linked list
// Bonus: do it without creating a temporary buffer
function removeDupNode(linkedList) {
  let head = linkedList;
  // alternative, one can use hashmap to store values
  let set = new Set([head.value]);
  while (head.next) {
    if (set.has(head.next.value)) {
      head.next = head.next.next;
    } else {
      set.add(head.next.value);
      head = head.next;
    }
  }
  return linkedList;
}
