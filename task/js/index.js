function isValidLength(title) {
  return title.length < 3 || title.length > 19;
}

function isUpperCaseLetter(title) {
  return title.charCodeAt(0) >= 65 && title.charCodeAt(0) <= 90;
}

function isAllowedSymbols(title) {
  const allowedSymbols = ' !?:.,-';

  return title.split('').every((symbol) => {
    return symbol.charCodeAt(0) > 64 &&
           symbol.charCodeAt(0) < 91 ||
           symbol.charCodeAt(0) > 96 &&
           symbol.charCodeAt(0) < 123 ||
           allowedSymbols.split('').includes(symbol);
  });
}

function validateTitle(title) {
  const valid = 'VALID';
  const invalid = 'INVALID';
  const validType = 'string';
  const invalidMessage = 'Incorrect input data';

  if (typeof(title) !== validType) {
    return invalidMessage;
  }

  if (isValidLength(title) || !isUpperCaseLetter(title[0])) {
    return invalid;
  }

  return isAllowedSymbols(title) ? valid : invalid;
}

function sum(value1, value2) {
  const checkValue1 = typeof(value1) === 'number' &&
        value1 % 3 === 0 &&
        value1 % 5 === 0;

  const checkValue2 = typeof(value2) === 'number' &&
        value2 % 3 === 0 &&
        value2 % 5 === 0;

  if (checkValue1) {
    value1 = -value1;
  }

  if (checkValue2) {
    value2 = -value2;
  }

  return Number(value1) + Number(value2);
}

function checkNumber(value) {
  if (value === 2) {
    return [true, true, false];
  }

  if (value % 10 === 0) {
    return [false, true, true];
  }

  if (isPrime(value)) {
    return [true, false, false];
  } else {
    return [false, value % 2 === 0, false];
  }
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return number > 1;
}

function tickets(person) {
  let [amount25, amount50] = [0, 0];

  person.forEach(function(item) {
    if (item == 25) {
      amount25++;
    }

    if (item == 50) {
      amount50++;
      amount25--;
    }

    if (item == 100) {
      if (amount50 > 0) {
        amount50--;
        amount25--;
      } else {
        amount25 -= 3;
      }
    }
  });

  return amount25 < 0 || amount50 < 0 ? 'NO' : 'YES';
}

const listOfPosts2 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
    ],
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus',
      },
    ],
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus',
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle',
  },
];

function getQuantityPostsByAuthor(listOfPosts2, authorName) {
  const postsQuantity = listOfPosts2
      .filter((post) => post.author === authorName).length;

  const commentsQuantity = listOfPosts2.map((post) => {
    if (post.comments) {
      return post.comments.filter((comment) => comment.author === authorName);
    }
  }).filter((item) => item)
      .map((item) => item
          .map((item) => item).length)
      .reduce((a, b) => a + b, 0);

  return `Post: ${postsQuantity}, comments: ${commentsQuantity}`;
};
getQuantityPostsByAuthor(listOfPosts2, 'Rimus');

function getSum(num1, num2) {
  return getSum(num1.toString().split(''),
      num2.toString().split(''), '', '', 10);

  function getSum(num1, num2, result, restValue, base) {
    const isRes = num1.length === 0 &&
                  num2.length === 0 &&
                  !restValue;

    if (isRes) {
      return result;
    }

    const left = parseInt(num1.pop() || '0', 10);
    const right = parseInt(num2.pop() || '0', 10);
    const sumOfTwoNumbers = left + right + (restValue || 0);

    return getSum(num1, num2, sumOfTwoNumbers % base + (result || ''),
        Math.floor(sumOfTwoNumbers / base), base);
  }
}
