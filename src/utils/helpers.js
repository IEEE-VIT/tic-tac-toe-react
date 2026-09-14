/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

// this is a function that will determine the winner of the game!
// input: arr - a 1x9 row-major array, with "X", "O", and null values.
// output: { winner, winningLine } - winner is "Player 1" / "Player 2" / "None",
// and winningLine is the 3 winning indices (0-8) or null if there is no winner.
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
    const nums = arr.map((val) => {
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
    while (nums.length) board.push(nums.splice(0, 3));

    // row-checks:
    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += board[i][j];
        }
        const line = [i * 3, i * 3 + 1, i * 3 + 2];
        if (rowSum === 3) return { winner: winPlayer1, winningLine: line };
        if (rowSum === -3) return { winner: winPlayer2, winningLine: line };
    }

    // column checks:
    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += board[j][i];
        }
        const line = [i, i + 3, i + 6];
        if (colSum === 3) return { winner: winPlayer1, winningLine: line };
        if (colSum === -3) return { winner: winPlayer2, winningLine: line };
    }

    // diagonal checks:
    if (board[0][0] + board[1][1] + board[2][2] === 3)
        return { winner: winPlayer1, winningLine: [0, 4, 8] };
    if (board[0][0] + board[1][1] + board[2][2] === -3)
        return { winner: winPlayer2, winningLine: [0, 4, 8] };

    if (board[2][0] + board[1][1] + board[0][2] === 3)
        return { winner: winPlayer1, winningLine: [2, 4, 6] };
    if (board[2][0] + board[1][1] + board[0][2] === -3)
        return { winner: winPlayer2, winningLine: [2, 4, 6] };

    // No winner
    return { winner: winNone, winningLine: null };
};

// prettier-ignore
const squares = [
    "O", null, null,
    "X", "X", "O",
    null, null, null
];

// example:
// console.log(calculateWinner(squares));
