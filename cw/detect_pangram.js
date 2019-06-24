const Test = {
  assertEquals: function(a, b) {
    console.log(a === b ? 'cool' : `not ${a} !== ${b}`)
  }
}

function isPangram(string) {
  return string
    .toLowerCase()
    .split('')
    .reduce(function(acc, item) {
      if (/[a-z]/.test(item) && acc.indexOf(item) === -1) {
        acc.push(item);
      }

      return acc;
    }, []).length === 26;
}

// var string = "The quick brown fox jumps over the lazy dog."
// Test.assertEquals(isPangram(string), true)
// var string = "This is not a pangram."
// Test.assertEquals(isPangram(string), false)
Test.assertEquals(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'), true)
