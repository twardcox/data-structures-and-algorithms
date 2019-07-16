/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

const excel = str => {
  // Solution code here...
  let newArray = str.split('\n').map(v => v.split(','));
  return newArray.map(v => v.reduce((t, v) => Number(t) + Number(v)), 0);
};

let result = excel('1,1,1\n4,4,4\n9,9,9');

// console.log(excel('1,1,1\n4,4,4\n9,9,9'));

console.log(result.length);
// .toStrictEqual(3);
console.log(result[0]);
// .toStrictEqual(3);
console.log(result[1]);
// .toStrictEqual(12);
console.log(result[2]);
// .toStrictEqual(27);
