import React from "react";
import "./Square.css";
import circleImg from "../../assets/circle.svg";
import crossImg from "../../assets/cross.svg";

const Square = ({ val = null, onClick, isWinningSquare = false }) => {
    let disp = null;
    if (val) disp = val === "X" ? crossImg : circleImg;
    const className = isWinningSquare ? "square square--highlight" : "square";
    return (
        <button type="button" className={className} onClick={onClick}>
            <img src={disp} className="square__img" alt="" />
        </button>
    );
};

export default Square;
