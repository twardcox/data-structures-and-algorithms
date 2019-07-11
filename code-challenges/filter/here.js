/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = arr => {
  // let newArr =
  console.log(arr.filter(v => Number.isNaN(v)));
};

console.log(evenOddNumericValues(['Gregor', 2, 4, 1]));
// .toStrictEqual(['even', 'even', 'odd']);

console.log(evenOddNumericValues(['a', 'b', 'c']));
// .toStrictEqual([]);

console.log(evenOddNumericValues(['1', 2, 3, '4', 5, '6']));
// .toStrictEqual(['even', 'odd', 'odd']);
