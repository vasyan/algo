function twoStrings(s1, s2) {
  const dict = {};
  let result = 'No';

  s1.split('').forEach(word => {
    dict[word] = (dict[word] || 0) + 1;
  });

  s2.split('').forEach(word => {
    dict[word] = (dict[word] || 0) - 1;

    if (dict[word] > 0) {
      result = 'Yes';
      return;
    }
  });

  return result;
}

console.log('Yes', twoStrings('hello', 'world'));
console.log('No', twoStrings('hi', 'world'));
