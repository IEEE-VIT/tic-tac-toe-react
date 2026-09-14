/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Square from "../Square/Square";
import { setScoreboard } from "../../redux/actions/Players Actions";
import { calculateWinner } from "../../utils/helpers";
import "./Board.css";

const Board = () => {
    // prettier-ignore
    const emptyBoard = [null, null, null, null, null, null, null, null, null];
    const history = useHistory();
    const dispatch = useDispatch();
    const { score } = useSelector((state) => state.players);
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState(null);
    const [ctr, setCtr] = useState(0);
    const [board, setBoard] = useState(emptyBoard);
    const turn = player === "X" ? "Player 1" : "Player 2";
    const currentScore = score || { player1: 0, player2: 0 };

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
        setWinningLine(null);
        setCtr(0);
    };

    useEffect(() => {
        const { winner: winPlayer, winningLine: line } = calculateWinner(board);

        if (winPlayer !== "None" && !winner && ctr > 0) {
            setWinner(winPlayer);
            setWinningLine(line);

            const nextScore = {
                player1: currentScore.player1,
                player2: currentScore.player2,
            };

            if (winPlayer === "Player 1") nextScore.player1 += 1;
            if (winPlayer === "Player 2") nextScore.player2 += 1;

            dispatch(setScoreboard(nextScore.player1, nextScore.player2));
        }

        if (winPlayer === "None" && !winner && ctr === 9) {
            setWinner("No one");
            setWinningLine(null);
        }
    }, [board, ctr, currentScore, dispatch, winner]);

    const winPrompt = winner ? (
        <div className="board__winner">
            <div
                className={`board__winner--msg${
                    winner === "No one" ? " board__winner--draw" : ""
                }`}
            >
                {winner === "No one"
                    ? "It's a draw!"
                    : `${winner} has won the game!`}
            </div>
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
            <button
                type="button"
                className="board__restart-btn"
                onClick={() => resetBoard()}
            >
                Restart
            </button>
            <div className="board__square-grp">
                {board.map((val, index) => (
                    <Square
                        val={val}
                        onClick={(e) => mutateBoard(e, index)}
                        isWinningSquare={Boolean(
                            winningLine && winningLine.includes(index)
                        )}
                        key={`sq${index}`}
                    />
                ))}
            </div>
            {winPrompt}
        </div>
    );
};

export default Board;
