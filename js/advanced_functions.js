const makeNum = (num, fn) => fn === undefined ? num : fn(num);

const zero = (fn) => makeNum(0, fn);
const one = (fn) => makeNum(1, fn);
const two = (fn) => makeNum(2, fn);
const three = (fn) => makeNum(3, fn);
const four = (fn) => makeNum(4, fn);
const five = (fn) => makeNum(5, fn);
const six = (fn) => makeNum(6, fn);
const seven = (fn) => makeNum(7, fn);
const eight = (fn) => makeNum(8, fn);
const nine = (fn) => makeNum(9, fn);

const plus = (num2) => function(num1) {
  return num1 + num2;
};

const operatorMinus = (num2) => function(num1) {
  return num1 - num2;
};

const divided = (num2) => function(num1) {
  return num1 / num2;
};

const multiply = (num2) => function(num1) {
  return num1 * num2;
};
