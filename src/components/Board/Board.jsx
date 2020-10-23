/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Square from "../Square/Square";
import { calculateWinner } from "../../utils/helpers";
import "./Board.css";

const Board = () => {
    // prettier-ignore
    const emptyBoard = [null, null, null, null, null, null, null, null, null];
    const history = useHistory();
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [ctr, setCtr] = useState(0);
    const [board, setBoard] = useState(emptyBoard);
    const turn = player === "X" ? "Player 1" : "Player 2";

    const togglePlayer = () =>
        player === "X" ? setPlayer("O") : setPlayer("X");

    const mutateBoard = (e, index) => {
        const newBoard = [...board];
        if (!winner && !newBoard[index]) {
            newBoard[index] = player;
            togglePlayer();
            setCtr(ctr + 1);
            setBoard(newBoard);
        }
    };

    const resetBoard = () => {
        setBoard(emptyBoard);
        setPlayer("X");
        setWinner(null);
        setCtr(0);
    };

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const winPlayer = calculateWinner(board);
            if (winner !== "No one")
                setWinner(winPlayer === "None" ? null : winPlayer);
            if (!winner && ctr === 9) setWinner("No one");
        }
    });

    const winPrompt = winner ? (
        <div className="board__winner">
            <div className="board__winner--msg">{winner} has won the game!</div>
            <div className="board__winner--choice">
                Would you like to have another go?
                <button
                    type="button"
                    className="board__btn"
                    onClick={() => resetBoard()}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className="board__btn"
                    onClick={() => history.push("/")}
                >
                    No
                </button>
            </div>
        </div>
    ) : null;
    return (
        <div className="board">
            <div className="board__current">Current turn: {turn}</div>
            <div className="board__square-grp">
                {board.map((val, index) => (
                    <Square
                        val={val}
                        onClick={(e) => mutateBoard(e, index)}
                        key={`sq${index}`}
                    />
                ))}
            </div>
            {winPrompt}
        </div>
    );
};

export default Board;
