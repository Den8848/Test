const complexFunction = function(arg1, arg2) {
  return arg1 + arg2;
};

const cache = (func) => {
  const cache = {};

  return function() {
    const stamp = JSON.stringify(arguments); // eslint-disable-line
    return !(stamp in cache) ?
    cache[stamp] = func.apply(this, arguments) : cache[stamp]; // eslint-disable-line
  };
};

const cachedFunction = cache(complexFunction);

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step); // eslint-disable-line
    return this;
  },
};

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1)); // eslint-disable-line
}

function sum() {
  return [].reduce.call(arguments, function(a, b) { // eslint-disable-line
    return a + b;
  });
}

function minus() {
  return [].reduce.call(arguments, function(a, b) { // eslint-disable-line
    return a - b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) { // eslint-disable-line
    return a * b;
  });
}

function devide() {
  return [].reduce.call(arguments, function(a, b) { // eslint-disable-line
    return a / b;
  });
}

const applyAll2 = (func, ...values) => func(...values);
const sum2 = (...vals) => vals.reduce((acc, val) => acc + val);
const mul2 = (...vals) => vals.reduce((acc, val) => acc * val);
const divide2 = (...vals) => vals.reduce((acc, val) => acc / val);
