const fs = require('fs');

function getMedian(list, d) {
  const half = Math.floor(d / 2)
  const odd = d % 2

  // const _list = list.getList();

  // fs.writeFileSync('./test', _list.join(', '), { flag: 'a' });
  // fs.writeFileSync('./test', '\n\n--------------\n\n', { flag: 'a' });

  if (odd) {
    return list[half]
  }

  // console.log('list[half - 1] + list[half])', list[half - 1], list[half])

  return (list[half - 1] + list[half]) / 2
}

function swap(list, left, right) {
  const tmp = list[left]

  list[left] = list[right]
  list[right] = tmp
}

function findLastIndex(list, start, value) {
  for (let i = start; i < list.length; i++) {
    if (list[i] === value && list[i + 1] !== value) {
      return i;
    }
  }

  return -1;
}

function findFirstIndex(list, start, value) {
  for (let i = start; i >= 0; i--) {
    if (list[i] === value && list[i - 1] !== value) {
      return i;
    }
  }

  return -1;
}

function addAndRemoveFromList(list, add, remove) {
  // console.log('addAndRemoveFromList', add, remove)
  if (add === remove) {
    return
  }

  if (remove < add) {
    let left = findLastIndex(list, 0, remove);
    let right = findLastIndex(list, left, list[left + 1]);

    if (right === -1) {
      list[left] = add
    }

    while (list[right] !== add && list[left + 1] < add) {
      swap(list, left, right);
      left = right;
      right = findLastIndex(list, right, list[right + 1]);
    }

    list[left] = add;
  } else {
    let right = findFirstIndex(list, list.length, remove);
    let left = findFirstIndex(list, right, list[right - 1]);

    if (left === -1) {
      list[right] = add
    }

    while (list[left] !== add && list[right - 1] > add) {
      swap(list, left, right);
      right = left;
      left = findFirstIndex(list, left, list[left - 1]);
    }

    list[right] = add;
  }

  return list
}

// console.log(findLastIndex([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5], 0, 2))
// console.log(findFirstIndex([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5], 10, 1))
// console.log(addAndRemoveFromList([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5], 5, 2))
// console.log(addAndRemoveFromList([0, 0, 0, 1, 1, 3, 3, 4, 4, 4, 5, 5], 2, 4))
// console.log(addAndRemoveFromList([0, 0, 0, 1, 1, 3, 3, 4, 4, 4, 5, 5], 2, 0))
// console.log(addAndRemoveFromList([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5], 2, 5))
// console.log(addAndRemoveFromList([20, 30, 40], 0, 20))
// console.log(addAndRemoveFromList([20, 30, 40], 50, 20))

function activityNotifications(expenditure, d) {
  let count = 0;
  const list = expenditure.slice(0, d).sort((a, b) => a - b);

  for (let index = d; index < expenditure.length; index++) {
    const median = getMedian(list, d);
    // console.log('median', median)
    // fs.writeFileSync('./test', `${median}\n`, { flag: 'a' });

    // console.log('iterate ', median, list)

    if (
      (index < expenditure.length - 1) &&
      median <= expenditure[index] / 2 &&
      !(expenditure[index] == 0 && median == 0)
    ) {
      count++
    }

    if (index + 1 < expenditure.length) {
      addAndRemoveFromList(list, expenditure[index], expenditure[index - d]);
    }

    // return
  }

  return count
}

// console.log(activityNotifications([1, 2, 3, 4, 4], 4))
// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
// console.log(activityNotifications([0, 10, 20, 30, 40, 0, 50, 60, 70, 0, 80, 90, 100, 110, 120, 130, 140], 3))
// console.log(activityNotifications([0, 0, 0, 0, 0], 1))
// console.log(activityNotifications([1, 1, 0, 1, 1], 2))

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // const ws = fs.createWriteStream('./test');

  const nd = readLine().split(' ');

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

  let result = activityNotifications(expenditure, d);

  console.log(result)

  // ws.write(result + "\n");

  // ws.end();
}
