/* eslint-disable no-unused-vars */
import { SET_USERNAMES, INCREMENT_SCORE } from "../types";

export const setPlayers = (player1, player2, history) => (
    dispatch,
    getState
) => {
    dispatch({ type: SET_USERNAMES, payload: { player1, player2 } });
    history.push("/game");
};

// winner: "Player 1" or "Player 2", as returned by calculateWinner
export const incrementScore = (winner) => ({
    type: INCREMENT_SCORE,
    payload: winner,
});
