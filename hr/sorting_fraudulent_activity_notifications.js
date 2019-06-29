const fs = require('fs');

function arrayToObject(arr) {
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = (dict[arr[i]] || 0) + 1
  }

  return dict
}

function getElemByIndex(dict, index) {
  const keys = Object.keys(dict).filter(key => dict[key] > 0);
  let i = 0;
  let j = 0;

  if (dict[keys[j]] > index) {
    return Number(keys[j]);
  }
  i = i + Number(dict[keys[j]]);

  while (i <= index) {
    j++
    i = i + Number(dict[keys[j]]);
  }

  return keys[j]
}

function getMedian(dict, odd, half) {
  let median = null;

  if (odd) {
    median = Number(getElemByIndex(dict, half))
  } else {
    // console.log('by indexes ', Number(getElemByIndex(dict, half - 1)), Number(getElemByIndex(dict, half)));
    median = (Number(getElemByIndex(dict, half - 1)) + Number(getElemByIndex(dict, half))) / 2;
  }

  return median
}

function activityNotifications(expenditure, d) {
  const dict = {};
  let count = 0;

  expenditure.slice(0, d).forEach(item => {
    dict[item] = (dict[item] || 0) + 1
  });

  const half = Math.floor(d / 2);
  const odd = d % 2;

  for (let index = d; index < expenditure.length; index++) {
    const median = getMedian(dict, odd, half);

    if (
      (index < expenditure.length - 1) &&
      median <= expenditure[index] / 2 &&
      !(expenditure[index] == 0 && median == 0)
    ) {
      count++
    }

    if (index + 1 < expenditure.length) {
      dict[expenditure[index]] = Number((dict[expenditure[index]]) || 0) + 1;
      dict[expenditure[index - d]] = Number(dict[expenditure[index - d]]) - 1;
    }
  }

  return count
}

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
