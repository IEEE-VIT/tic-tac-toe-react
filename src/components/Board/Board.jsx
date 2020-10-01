/* eslint-disable  */
import React from "react";
import "./Board.css";

// import Square from "../Square/Square";

// take props from parent

const DummySquare = ({ value = "X", handleClick }) => (
    <div className="square" onClick={handleClick}>
        {value}
    </div>
);
const dummyHandleClick = () => alert("Clicked!");
const dummyBoard = Array(9).fill("X");

const Board = ({ board = dummyBoard, handleClick = dummyHandleClick }) => (
    // pass onClick prop function to every square
    // use a function that will map squares to form a board

    // `handleClick` and `board` props will come from Game Page component
    // TODO:
    // - replace dummy props and dummy square component
    // - added some initial styles that will probably need to change later
    <div className="board">
        {board.map((value, idx) => <DummySquare key={idx} value={value} handleClick={handleClick} />)}
    </div>
);

export default Board;
