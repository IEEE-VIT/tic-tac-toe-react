/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

// this is a function that will determine the winner of the game!
// input: arr - a 1x9 row-major array, with "X", "O", and null values.
export const calculateWinner = (arr) => {
    // add consitions of winning
    const board = [];
    const winPlayer1 = "Player 1";
    const winPlayer2 = "Player 2";
    const winNone = "None";

    // replacements:
    // X ---> 1
    // O ---> -1
    // null ---> 0
    arr = arr.map((val) => {
        switch (val) {
            case "X":
                return 1;
            case "O":
                return -1;
            default:
                return 0;
        }
    });

    // board re-format:
    while (arr.length) board.push(arr.splice(0, 3));

    // row-checks:
    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += board[i][j];
        }
        if (rowSum === 3) return winPlayer1;
        if (rowSum === -3) return winPlayer2;
    }

    // column checks:
    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += board[j][i];
        }
        if (colSum === 3) return winPlayer1;
        if (colSum === -3) return winPlayer2;
    }

    // diagonal checks:
    if (board[0][0] + board[1][1] + board[2][2] === 3) return winPlayer1;
    if (board[0][0] + board[1][1] + board[2][2] === -3) return winPlayer2;

    if (board[2][0] + board[1][1] + board[0][2] === 3) return winPlayer1;
    if (board[2][0] + board[1][1] + board[0][2] === -3) return winPlayer2;

    // No winner
    return winNone;
};

// prettier-ignore
const squares = [
    "O", null, null,
    "X", "X", "O",
    null, null, null
];

// example:
// console.log(calculateWinner(squares));
