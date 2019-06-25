function makeAnagram(a, b) {
  let obj = {}

  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = obj[a[i]] ? obj[a[i]] + 1 : 1
  }

  for (let i = 0; i < b.length; i++) {
    obj[b[i]] = obj[b[i]] ? obj[b[i]] - 1: -1
  }

  return Object.values(obj).reduce((acc, item) => acc + item, 0)
}

console.log(makeAnagram('abcde', 'bcd'))
