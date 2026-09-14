/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPlayers } from "../../redux/actions/Players Actions";
import "./LandingPage.css";

const LandingPage = () => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const trimmedPlayer1 = player1.trim();
        const trimmedPlayer2 = player2.trim();

        if (!trimmedPlayer1 || !trimmedPlayer2) {
            setError("Please enter both player names");
            return;
        }

        setError("");
        dispatch(setPlayers(trimmedPlayer1, trimmedPlayer2, history));
    };

    return (
        <div className="landing">
            <div className="landing__heading">IEEE-VIT&apos;s Tic Tac Toe!</div>
            {/* use two input boxes to enter player names */}
            <input
                type="text"
                className="landing__input"
                placeholder="Player 1 name"
                value={player1}
                onChange={(evt) => setPlayer1(evt.target.value)}
            />
            <input
                type="text"
                className="landing__input"
                placeholder="Player 2 name"
                value={player2}
                onChange={(evt) => setPlayer2(evt.target.value)}
            />
            {error && <div className="landing__error">{error}</div>}
            <button
                type="button"
                className="landing__btn"
                onClick={handleSubmit}
            >
                Let&apos;s Play!
            </button>
        </div>
    );
};

export default LandingPage;
