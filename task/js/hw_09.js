function calculateFibByRecursion(sequenceLength) {
  if (arguments.length === 0) {
    return 'Please input number!';
  }

  if (sequenceLength <= 0) {
    return 'Sequence length must be more than 0!';
  }

  if (sequenceLength === 1 || sequenceLength === 2) {
    return 1;
  }

  return calculateFibByRecursion(sequenceLength - 1) +
    calculateFibByRecursion(sequenceLength - 2);
}

function calculateFibByCycle(sequenceLength) {
  [number1, number2] = [1, 1];

  if (arguments.length === 0) {
    return 'Please input number!';
  }

  if (sequenceLength <= 0) {
    return 'Sequence length must be more than 0!';
  }

  for (let i = 3; i <= sequenceLength; i++) {
    const res = number1 + number2;
    number1 = number2;
    number2 = res;
  }

  return number2;
}

// Use the code down below in your console
// for checking what approach works faster
console.time('Function calculateFibByRecursion execute for');
calculateFibByRecursion(30);
console.timeEnd('Function calculateFibByRecursion execute for');

console.time('Function calculateFibByCycle execute for');
calculateFibByCycle(30);
console.timeEnd('Function calculateFibByCycle execute for');

// Description: calculateFibByCycle function works faster than
// calculateFibByRecursion function because when we use resursion
// the performance gets less and the call stack fills up by every
// result of each recursion.

function parseJSON(json) { // eslint-disable-line
  try {
    return JSON.parse(json);
  } catch (err) {
    return null;
  }
}

window.onerror = function(message, url, line) {
  console.log('Message: ' + message + '\n(' + url + ':' + line + ')');
  return true;
};

function parseJSON(json) {
  try {
    const data = JSON.parse(json);

    if (!data.name || !data.company) {
      throw new Error('Invalid data!');
    }

    console.log(data);
  } catch (err) {
    throw err;
  }
}
