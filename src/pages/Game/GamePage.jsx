/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const GamePage = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    // setState of who is the next play x or o
    const xIsNext = null;

    // declare a winner as the function in helper.js
    const winner = null;

    const handleClick = () => {
        // this will be the onClick for board componenet
        // Copy board
        // like :>> const boardCopy = [...board];
        // add logic to change the turn of player
        // set board
        // set next player
    };

    return (
        <div>
            <h1>IEEE-VIT&apos;s Tic Tac Toe!</h1>
            {/* add board component and pass prop board */}

            <div>
                <h1>
                    {winner
                        ? `We have a Winner ${winner}`
                        : `Next Move ${xIsNext ? "X" : "O"}`}
                </h1>
            </div>
        </div>
    );
};

export default GamePage;
