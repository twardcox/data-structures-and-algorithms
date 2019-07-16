/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

const forEachTwoToThe = arr => {
  let newArr = [];
  arr.forEach(v => newArr.push(2 ** v));
  return newArr;
};

console.log(forEachTwoToThe([0, 4, 5]));
// .toStrictEqual([1, 16, 32]);

console.log(forEachTwoToThe([-1, -2, -3]));
// .toStrictEqual([0.5, 0.25, 0.125]);
