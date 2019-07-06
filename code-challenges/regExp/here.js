const matchMonth = input => {
  let patt = [new RegExp(/\bOctober\b/g), new RegExp(/\bOct\b/g), new RegExp(/\boctober\b/g), new RegExp(/\boct\b/g)];

  return patt[0].test(input) ? true : patt[1].test(input) ? true : patt[2].test(input) ? true : patt[3].test(input) ? true : false;
};

console.log('matchMonth: Big O ', matchMonth('Oct'));

console.log('matchMonth): little o ', matchMonth('oct'));

console.log('matchMonth: Big long O', matchMonth('October'));

console.log('matchMonth: little long o', matchMonth('october'));

console.log('matchMonth: no o', matchMonth('November'));
console.log('matchMonth: no o', matchMonth('nov'));
console.log('matchMonth: no o', matchMonth(123));
console.log('matchMonth: little long o', matchMonth('octob'));
console.log('matchMonth: big long o', matchMonth('OCTOBER'));
console.log('matchMonth: no o', matchMonth('notOctober'));
