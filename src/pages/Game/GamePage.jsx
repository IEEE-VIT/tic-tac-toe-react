/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Board from "../../components/Board/Board";
import "./GamePage.css";

const GamePage = () => {
    const { player1, player2, score } = useSelector((state) => state.players);
    const scoreboard = score || { player1: 0, player2: 0 };

    return (
        <div className="game">
            <div className="game__heading">Let&apos;s Play Tic-Tac-Toe!</div>
            <div className="game__players">
                {player1 || "Player 1"} (Player 1) V/s {player2 || "Player 2"}{" "}
                (Player 2)
            </div>
            <div className="game__scoreboard" aria-label="scoreboard">
                <div className="game__scoreboard--title">Scoreboard</div>
                <div className="game__scoreboard--row">
                    <span>{player1 || "Player 1"}</span>
                    <strong>{scoreboard.player1}</strong>
                </div>
                <div className="game__scoreboard--row">
                    <span>{player2 || "Player 2"}</span>
                    <strong>{scoreboard.player2}</strong>
                </div>
            </div>
            <Board />
        </div>
    );
};

export default GamePage;
