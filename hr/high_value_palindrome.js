function assert(condition) {
  return condition ? '✅' : '❌';
}

function highestValuePalindrome(s, n = 0, k, changed = [], isPalindrome) {
  let kCount = k;
  let newString = s.split('');
  let newChanged = [].concat(changed);

  if (n <= k) {
    return '9'.repeat(n);
  }

  for (let i = 0; i < n / 2; i++) {
    if (i == 0 && newString[i] == 0 && !changed.includes(i)) {
      const max = Math.max.apply(null, [newString[i], newString[newString.length - 1 - i]]);

      if (max > 0) {
        newString[i] = max;
        newString[newString.length - 1 - i] = max;
        kCount--;
      } else {
        newString[i] = 9;
        newString[newString.length - 1 - i] = 9;
        kCount = kCount - 2;
      }
      newChanged.push(i);
    } else if (isPalindrome && newString[i] !== 9 && kCount > 0) {
      newString[i] = 9;
      newString[newString.length - 1 - i] = 9;
      kCount--;
    } else if (changed.includes(i) && kCount >= 1) {
      newString[i] = 9;
      newString[newString.length - 1 - i] = 9;

      kCount--;
    } else if (newString[i] != newString[newString.length - 1 - i]) {
      const max = Math.max.apply(null, [newString[i], newString[newString.length - 1 - i]]);

      newString[i] = max;
      newString[newString.length - 1 - i] = max;
      kCount--;
      newChanged.push(i);
    } else if (i == newString.length - 1 - i && kCount > 0) {
      newString[i] = 9;
      kCount--;
      newChanged.push(i);
    }
  }

  if (kCount < 0) {
    return -1;
  }

  if (kCount > 0) {
    return highestValuePalindrome(newString.join(''), n, kCount, newChanged, true);
  }

  return newString.join('');
}

console.log('Result', highestValuePalindrome('932239', 6, 2));
// console.log('Result', highestValuePalindrome('3943', 4, 1) );
// console.log('Result -1 ', highestValuePalindrome('0011', 4, 1) );
// console.log('Result', highestValuePalindrome('092282', 6, 3) );
// console.log('Result', highestValuePalindrome('0', 1, 1) );
// console.log('Result', highestValuePalindrome('12321', 5, 1) );
// console.log('Result', highestValuePalindrome('010', 3, 2) );
// console.log('01', assert(highestValuePalindrome('12321', 5, 1) == 12921));
// console.log('01', assert(highestValuePalindrome('01', 1, 2) == 99));
// console.log('092282', assert(highestValuePalindrome('092282', 6, 3) == 992299));
// console.log('3943', assert(highestValuePalindrome('3943', 4, 1) == 3993));