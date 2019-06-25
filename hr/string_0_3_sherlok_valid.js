function isValid(s) {
  let result = true;
  let freq = {};

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = freq[s[i]] ? freq[s[i]] + 1 : 1
  }

  const values = Object.values(freq).sort();
  const vMax = Math.max.apply(null, values);
  const vMin = Math.min.apply(null, values);
  let maxCount = 0;
  let minCount = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] == vMax) {
      maxCount++;
    } else if (values[i] == vMin) {
      minCount++;
    }
  }

  const freqValues = {};

  for (let i = 0; i < values.length; i++) {
    freqValues[values[i]] = freqValues[values[i]] ? freqValues[values[i]] + 1 : 1;
  }

  // console.log(freqValues, minCount, maxCount, vMax, vMin);

  const freqValuesKeys = Object.keys(freqValues);
  if (freqValuesKeys.length > 2) {
    return 'NO';
  }

  if (freqValuesKeys.length === 1) {
    return 'YES';
  }

  if (minCount === 1) {
    return 'YES';
  }

  if (vMax - maxCount === vMin) {
    return 'YES';
  }

  return 'NO';
}

console.log(isValid('a')) // YES
console.log(isValid('abcdefgb')) // YES
console.log(isValid('abcdefghhgfedecba')); // YES
console.log(isValid('aaaabbcc')); // NO
console.log(isValid('aabbcd')); // NO
console.log(isValid('aabbccddeefghi')); // NO
console.log(isValid('abbcccddddeeee')) // NO
