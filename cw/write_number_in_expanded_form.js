const Test = {
  assertEquals: function(a, b) {
    console.log(a === b ? 'cool' : `not ${a} !== ${b}`)
  }
}

function expandedForm(number) {
  const arr = String(number).split('');
  const length = arr.length - 1;

  return arr.reduce(function(acc, item, index) {
    if (item == 0) {
      return acc;
    }
    
    return acc.concat(index === length ? item : item * Math.pow(10, length - index))
  }, []).join(' + ');
}

Test.assertEquals(expandedForm(12), '10 + 2');
Test.assertEquals(expandedForm(42), '40 + 2');
Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');