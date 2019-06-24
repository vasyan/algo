const Test = {
  assertEquals: function(a, b) {
    console.log(a === b ? 'cool' : `not ${a} !== ${b}`)
  },
  assertNotEquals(a, b, msg) {
    return a !== b ? 'cool' : msg
  }
}

// function checkReverse

function longestPalindrome(str) {
  const table = [];

  for (let i =)
}


Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)