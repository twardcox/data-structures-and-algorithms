const fizzbuzz = arr => {
  // let output = [];
  arr.forEach((v, i, a) => {
    a[i] = `${(!(v % 3) ? 'Fizz ' : '') + (!(v % 5) ? 'Buzz' : '') || v}`;
    console.log('a[i]: ', a[i]);
  });
  return arr;
};

const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log('fizzbuzz(inputs): ', fizzbuzz(inputs));
