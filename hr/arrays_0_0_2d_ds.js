// Complete the hourglassSum function below.
function getHourglass(colIndex, rowIndex, arr) {
  return [
    arr[colIndex][rowIndex],
    arr[colIndex][rowIndex + 1],
    arr[colIndex][rowIndex + 2],
    (arr[colIndex + 1] || [])[rowIndex + 1],
    (arr[colIndex + 2] || [])[rowIndex],
    (arr[colIndex + 2] || [])[rowIndex + 1],
    (arr[colIndex + 2] || [])[rowIndex + 2],
  ]
}

function iterate(cb, arr) {
  arr.forEach(function(col, colIndex) {
    col.forEach(function(row, rowIndex) {
      cb(getHourglass(colIndex, rowIndex, arr))
    })
  })
}

function hourglassSum(arr) {
  let result = -Infinity

  iterate(function (item) {
    const newResult = item.reduce(function(acc, item) {
      return acc + item
    }, 0)
    result = newResult > result ? newResult : result
  }, arr)

  return result
}

// const mock_data = [
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 2, 4, 4, 0 ],
//   [ 0, 0, 0, 2, 0, 0 ],
//   [ 0, 0, 1, 2, 4, 0 ]
// ];

const mock_data = [
  [-1, -1, 0 ,-9 ,-2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
]

console.log(hourglassSum(mock_data))