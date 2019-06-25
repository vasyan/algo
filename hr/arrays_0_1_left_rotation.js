// Complete the rotLeft function below.

function getGcd(a, b) {
  if (b == 0)
    return a
  else
    return getGcd(b, a % b)
}

function swap (arr, source, target) {
  const tmp = arr[target]
  arr[target] = arr[source]
  arr[source] = tmp
}

function rotLeft(a, d) {
  const length = a.length;
  const gcd = getGcd(length, d)

  for (let i = 0; i < gcd; i++) {
    let tmp = a[i]
    let j = i

    while (true) {
      let k = j + d

      if (k >= length)
        k = k - length
      if (k === i)
        break

      a[j] = a[k]
      j = k
    }
    a[j] = tmp 
  }

  return a
}

console.log(rotLeft([1,2,3,4,5], 1))
console.log(rotLeft([1,2,3,4,5], 2))
console.log(rotLeft([1,2,3,4,5], 3))
console.log(rotLeft([1,2,3,4,5], 4))
console.log(rotLeft([1,2,3,4,5], 5))