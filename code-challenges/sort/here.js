/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

This challenge should use the array of meetings from challenge 9, above.

Sort the meetings in the order that they start. If two meetings start at the same time on the same day, the shorter meeting should come first.

You DO NOT need to use your solution to Challenge 9 in completing Challenge 10.
------------------------------------------------------------------------------------------------ */

function Meeting(dayOfWeek, start, end) {
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}

const dayValue = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 };

const sortSchedule = arr => {
  return arr.sort((a, b) => {
    let aDur = a.end - a.start;
    let bDur = b.end - b.start;

    if (dayValue[a.dayOfWeek] === dayValue[b.dayOfWeek] && a.start === b.start) {
      return aDur > bDur;
    } else if (dayValue[a.dayOfWeek] === dayValue[b.dayOfWeek]) {
      return a.start > b.start;
    } else {
      return dayValue[a.dayOfWeek] > dayValue[b.dayOfWeek];
    }
  });
};
