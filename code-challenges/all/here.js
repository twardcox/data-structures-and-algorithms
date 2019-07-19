/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:

  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */

const helperFunct = (grid, r1, c1, r2, c2, r3, c3) => {
  let checkString = `${grid[r1][c1]}${grid[r2][c2]}${grid[r3][c3]}`;
  return /XXX | OOO/.test(checkString);
};

const detectTicTacToeWin = board => {
  let check = false;
  for (let i = 0; i < board.length; i++) {
    helperFunct(board, i, i, i + 1, i, i + 2, i);
    helperFunct(board, i, i, i, i + 1, i, i + 2);
  }
  helperFunct(board, 0, 0, 1, 1, 2, 2);
  helperFunct(board, 2, 0, 1, 1, 0, 2);
};

console.log(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']]));
// .toStrictEqual(true);
console.log(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']]));
// .toStrictEqual(true);

console.log(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']]));
// .toStrictEqual(false);

console.log(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']]));
// .toEqual(false);
