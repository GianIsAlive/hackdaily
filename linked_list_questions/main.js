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

// return kth to last element in a singly linked list
function returnKthToLast(linkedList, k) {
  let head1 = linkedList;
  let head2 = linkedList;
  for (let i = 0; i < k - 1; i++) {
    head1 = head1.next;
  }
  while (head1.next) {
    head1 = head1.next;
    head2 = head2.next;
  }
  return head2;
}
// write a function that reverses a linked list
function reverseLinkedList(linkedList) {
  let head = linkedList;
  let reversed = null;
  while (head) {
    let temp = head.next;
    head.next = reversed;
    reversed = head;
    head = temp;
  }
  return reversed;
}
