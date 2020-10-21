import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormGroup from "../../components/FormGroup/FormGroup";
import { setPlayers } from "../../redux/actions/Players Actions";
import "./LandingPage.scss";
// ==========================================================================
const LandingPage = () => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(player1, player2);
        dispatch(setPlayers(player1, player2, history));
    };
    // ==========================================================================
    return (
        <div className="landing">
            <img
                src="https://hacktoberfest.ieeevit.com/static/media/logoplus.9e04156c.png"
                alt="IEEE-VIT"
                className="landing__img"
            />
            <div className="landing__heading">IEEE-VIT&apos;s Tic Tac Toe!</div>
            <form className="landing__form" onSubmit={handleSubmit}>
                <div className="landing__form__input">
                    <FormGroup
                        name="player1"
                        type="text"
                        placeholder="Player 1"
                        value={player1}
                        onChange={(e) => setPlayer1(e.target.value)}
                    />
                    <FormGroup
                        name="player2"
                        type="text"
                        placeholder="Player 2"
                        value={player2}
                        onChange={(e) => setPlayer2(e.target.value)}
                    />
                </div>
                <button type="submit" className="landing__form__submit">
                    Let&apos;s Play!
                </button>
            </form>
        </div>
    );
};
// ==========================================================================
export default LandingPage;
