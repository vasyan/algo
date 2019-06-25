function countPairs (array) {
  if (array.length < 2) {
    return 0
  }

  let count = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length - 1; j++) {
      count++
    }
  }

  return count
}

function anagramCounter (wordsArray) {
  const obj = wordsArray.reduce(function(acc, item) {
    const hash = item.split('').sort().join('');
    acc[hash] = acc[hash] ? acc[hash].concat(item) : [item]
    return acc
  }, {})

  return Object.keys(obj).reduce((acc, item) => {return acc + countPairs(obj[item])}, 0);
}

// console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba'])) // 2
// anagramCounter(['dell', 'ledl', 'lled', 'cba']) // 3
console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'])) // 11