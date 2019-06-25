function alternatingCharacters(s) {
  let A = 'A';
  let B = 'B';
  let currentChar = s[0];
  let deletions = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== currentChar) {
      deletions++;
    } else if (currentChar === A) {
      currentChar = B;
    } else if (currentChar === B) {
      currentChar = A;
    }
  }

  return deletions;
}

console.log(alternatingCharacters('BABABA'))
console.log(alternatingCharacters('ABBABB'))
