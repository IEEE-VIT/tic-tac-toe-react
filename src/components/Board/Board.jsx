import React from "react";
import "./Board.css";
// import Square from "../Square/Square";

const style = {
    display: "grid",
};

// take props squares and onClick function from parent

const Board = () => (
    // pass onClick prop function to every square
    <div style={style}>
        {/* map squares to form a board */}

        {
            // squares.map((square, i) => ({
            /* pass prop value to component Square */
            // }))
        }
    </div>
);

export default Board;
