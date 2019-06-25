function minimumBribes(q) {
  let result = 0
  let swaps = 0

  q.forEach(function (item, index) {
    const i = item - 1
    if (i !== index) {
      swaps++
      result = i > index ? i - index ? index - i
    }
  })

  console.log(result)

  if (result > 2)
    console.log('Too chaotic')
}


minimumBribes([2, 5, 1, 3, 4])