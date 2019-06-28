function makeSortedLinkedList (arr) {
  function createNode(value) {
    return {
      value,
      next: null
    }
  }

  let head
  let pointer

  arr.sort().forEach(function(item) {
    const newNode = createNode(item)

    if (!head) {
      head = newNode
    }

    if (pointer) {
      pointer.next = newNode
      pointer = pointer.next
    } else {
      pointer = newNode
    }
  })

  function removeNode(value) {
    if (head.value === value) {
      head = head.next     

      return
    }

    let pointer = head

    while (pointer) {
      if (pointer.next && pointer.next.value === value) {
        pointer.next = pointer.next.next
      }

      pointer = pointer.next
    }
  }

  function addNode(value) {
    let pointer = head
    let added = false

    while(pointer && !added) {
      if (
        pointer.value <= value && pointer.next && pointer.next.value >= value
        || pointer.next === null
      ) {
        const next = pointer.next
        pointer.next = createNode(value)
        pointer.next.next = next
        added = true
      }
      pointer = pointer.next
    }
  }

  function getNodeByIndex(index) {
    if (index === 0) {
      return head
    }

    let pointer = head;
    let count = 0

    while (pointer.next && count !== index) {
      pointer = pointer.next
      count++
    }

    return pointer
  }

  function getList() {
    let arr = []

    let pointer = head

    while (pointer.next) {
      arr.push(pointer.value)
      pointer = pointer.next
    }

    return arr
  }

  return {
    addNode,
    removeNode,
    getNodeByIndex,
    getList
  }
}

function getMedian(list, d) {
  const half = Math.floor(d / 2)
  const odd = d % 2

  if (odd) {
    return list.getNodeByIndex(half).value
  }

  return (list.getNodeByIndex(half - 1).value + list.getNodeByIndex(half).value) / 2
}

function activityNotifications(expenditure, d) {
  let count = 0
  const list = makeSortedLinkedList(expenditure.slice(0, d + 1))

  for (let index = d; index < expenditure.length; index++) {
   if (
      (index < expenditure.length - 1) &&
      getMedian(list, d) <= expenditure[index] / 2
    ) {
      count++
    }

    if (index + 1 < expenditure.length) {
      list.removeNode(expenditure[index - d])
      list.addNode(expenditure[index + 1])
    }
  }

  return count
}

// console.log(activityNotifications([1, 2, 3, 4, 4], 4))
// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log(activityNotifications([0, 0, 0, 0, 0], 1))