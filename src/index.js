module.exports = function toReadable(number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let str = '';

  if (number < 0) {
    str = 'отрицательное число';
    return str;
  }

  if (number === 0) {
    str = 'zero';
    return str;
  }

  function nToS(n) {
    let s = '';

    if (n <= 9) {
      s = ones[n];
      return s;
    }

    if (n <= 19) {
      s = teens[n - 10];
      return s;
    }

    if (n <= 99) {
      if (n % 10 === 0) {
        s = `${tens[Math.trunc(n / 10)]}`;
      } else {
        s = `${tens[Math.trunc(n / 10)]} ${nToS(n % 10)}`;
      }
      return s;
    }

    if (n <= 999) {
      if (n % 100 === 0) {
        s = `${ones[Math.trunc(n / 100)]} hundred`;
      } else {
        s = `${ones[Math.trunc(n / 100)]} hundred ${nToS(n % 100)}`;
      }
      return s;
    }

    // if (n <= 999999) {
    //   // s = nToS(Math.trunc(n / 1000)) + ' thousand ' + nToS(n % 1000);
    //   s = `${ nToS(Math.trunc(n / 1000)) } thousand ${ nToS(n % 1000) } `;
    //   return s;
    // }

    // if (n <= 999999999) {
    //   s = `${ nToS(Math.trunc(n / 1000000)) } million ${ nToS(n % 1000000) } `;
    //   return s;
    // }

    // if (n <= 999999999999) {
    //   s = `${ nToS(Math.trunc(n / 1000000000)) } billion ${ nToS(n % 1000000000) } `;
    //   return s;
    // }
    s = 'еще не знаю';
    return s;
  }

  str = nToS(number);
  return str;
};
