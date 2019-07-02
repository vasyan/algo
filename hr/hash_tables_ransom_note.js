function checkMagazine(magazine, note) {
  const dict = {};

  magazine.split(' ').forEach(word => {
    dict[word] = (dict[word] || 0) + 1;
  });

  note.split(' ').forEach(word => {
    dict[word] = dict[word] - 1

    if (dict[word] < 0) {
      return 'NO'
    }
  });

  return 'YES'
}

console.log('YES', checkMagazine('give me one grand today night', 'give one grand today'));
console.log('NO', checkMagazine('two times three is not four', 'two times two is four'));
console.log('NO', checkMagazine('two times three is not four', 'two times two is four'));
