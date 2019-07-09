/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

const extractVowels = str => {
  let newArr = [];

  newArr.push(str.replace(/[aAeEiIoOuU]/gi, ''));
  newArr.push(
    str
      .replace(/[^aAeEiIoOuU]/gi, '')
      .split('')
      .sort()
      .join('')
  );

  return newArr;
};

console.log(extractVowels('gregor'));

console.log(extractVowels('The quick brown fox'));
