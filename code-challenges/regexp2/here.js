/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named validatePhoneNumber that accepts a phone number and determines if it is valid.

Acceptable formats include:
 - (555) 555-5555
 - (555)555 5555
 - 555 555-5555
 - 555-5555555
 - 555-555 5555
 - 555-555-5555
 - 555 555 5555
 - 555555-5555
 - 5555555555

Your function should include a single regular expression pattern that matches any of these formats.

Return either true or false.
------------------------------------------------------------------------------------------------ */

const validatePhoneNumber = phoneNumber => {
  return /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|extension)\s*(\d+))?$/.test(phoneNumber);
};

console.log(validatePhoneNumber('(555) 555-5555'));
// .toBeTruthy();
console.log(validatePhoneNumber('555 555-5555'));
// .toBeTruthy();
console.log(validatePhoneNumber('555-555-5555'));
// .toBeTruthy();
console.log(validatePhoneNumber('555 5555555'));
// .toBeTruthy();
console.log(validatePhoneNumber('5555555555'));
// .toBeTruthy();
console.log(validatePhoneNumber('234 567 8910'));
// .toBeTruthy();
// =================================================
console.log(validatePhoneNumber('abcdefghij'));
// .toBeFalsy();
console.log(validatePhoneNumber('222 222 2222 ext. 2222'));
// ).toBeFalsy();
console.log(validatePhoneNumber('(222 222-2222'));
// .toBeFalsy();
console.log(validatePhoneNumber('222 222-2222-'));
// .toBeFalsy();
console.log(validatePhoneNumber('(222 222- 2222'));
// .toBeFalsy();
console.log(validatePhoneNumber('(222 222 -2222'));
// .toBeFalsy();
console.log(validatePhoneNumber('523 555--5555'));
// .toBeFalsy();
console.log(validatePhoneNumber('55555555555'));
// .toBeFalsy();
console.log(validatePhoneNumber('55555555555'));
// .toBeFalsy();
console.log(validatePhoneNumber('55555555555'));
// .toBeFalsy();
console.log(validatePhoneNumber('55_55_5555'));
// .toBeFalsy();
