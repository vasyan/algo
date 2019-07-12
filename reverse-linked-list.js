function createNode(value) {
  return {
    value: value,
    next: null
  }
}

function createLinkedList(arr) {
  let head = null;
  let prev = null

  arr.forEach((value) => {
    const node = createNode(value)

    if (head === null) {
      head = node;
    }

    if (prev) {
      prev.next = node;
    }

    prev = node
  })

  return {
    head
  }
}

const linkedList = createLinkedList([1, 2, 3, 4, 5, 6]);

function reverseLinkedList(list) {
  if (list.head.next === null) {
    return list
  }

  let current = list.head.next
  let tail = null
  let head = list.head
  head.next = null

  while (current.next) {
    tail = current.next
    current.next = head
    head = current
    current = tail
  }

  return {
    head
  }
}

// console.log('HEAD ', linkedList.head)
// console.log('next ', linkedList.head.next)
// console.log('next next', linkedList.head.next.next)

console.log(reverseLinkedList(linkedList).head)
