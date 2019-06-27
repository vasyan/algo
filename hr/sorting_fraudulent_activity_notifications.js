function createSortedLinkedList (arr) {
  function createNode(value) {
    return {
      value,
      next: null
    }
  }

  let head
  let pointer

  for (let index = 0; index < arr.length; index++) {
    const newNode = createNode(arr[i])

    if (!head) {
      head = newNode
    }

    if (pointer) {
      pointer.next = newNode
    } else {
      pointer = newNode
    }
  }
  
  function removeNode(value) {
    if (head.value === value) {
      head = head.next     

      return
    }

    const pointer = head

    while (pointer) {
      if (pointer.next && pointer.next.value === value) {
        pointer.next = pointer.next.next
      }

      pointer = pointer.next
    }
  }

  function inserNode(value) {
    const pointer = head

    while(pointer) {
      if (pointer.value <= value && pointer.next > value) {
        const next = pointer.next
        pointer.next = createNode(value)
        pointer.next.next = next
      }
    }
  }

  return {
    insertNode,
    removeNode
  }
}

function getMedian(arr) {
  const half = Math.floor(arr.length / 2)

  if (arr.length % 2) {
    return arr[half]
  }

  return (arr[half - 1] + arr[half]) / 2
}

function activityNotifications(expenditure, d) {
  let count = 0

  for (let index = d; index < expenditure.length; index++) {
    if (
      (index < expenditure.length - 1) &&
      getMedian(expenditure.slice(index - d, index).sort()) <= expenditure[index] / 2
    ) {
      count++  
    }   
  }
  return count
}

console.log(activityNotifications([1, 2, 3, 4, 4], 4))
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))