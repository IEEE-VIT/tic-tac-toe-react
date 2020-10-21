/* eslint-disable no-unused-vars */
import React from "react";
import "./GamePage.css";

const GamePage = () => {
    // setState of who is the next play x or o

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
                    {/* Logic for declaring the winner or determining the next move */}
                </h1>
            </div>
        </div>
    );
};

export default GamePage;
