function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function partition(arr, left, right) {
  const pivot = arr[left]
  let i = left
  let j = left

  while (j < right) {
    if (arr[j] < pivot) {
      i++
      swap(arr, i, j)
    }
    j++
  }

  swap(arr, left, i)

  return i
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left >= right) {
    return
  }

  const m = partition(arr, left, right)

  quickSort(arr, left, m - 1)
  quickSort(arr, m + 1, right)
}

let unsorted = [4, 3, 12, 5, 6, 17, 3 , 5, 6]
quickSort(unsorted)
console.log(unsorted)