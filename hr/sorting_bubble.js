function swap(a, l, r) {
  const tmp = a[l]

  a[l] = a[r]
  a[r] = tmp
}

function countSwaps(a) {
  let swapCount = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
          swap(a, j, j + 1)
          swapCount++
        }
    }
    
}
  console.log(`Array is sorted in ${ swapCount } swaps.  
First Element: ${ a[0] }  
Last Element: ${ a[a.length - 1] }
`)
}

countSwaps([6,4,1])
countSwaps([1,2,3])
