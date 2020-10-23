/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Board from "../../components/Board/Board";
import "./GamePage.css";

const GamePage = () => {
    const { player1, player2 } = useSelector((state) => state.players);

    return (
        <div className="game">
            <div className="game__heading">Let&apos;s Play Tic-Tac-Toe!</div>
            <div className="game__players">
                {player1} (Player 1) V/s {player2} (Player 2)
            </div>
            <Board />
        </div>
    );
};

export default GamePage;
