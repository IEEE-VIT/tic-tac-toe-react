/* eslint-disable no-unused-vars */
import { SET_USERNAMES } from "../types";

export const setPlayers = (player1, player2, history) => (
    dispatch,
    getState
) => {
    dispatch({ type: SET_USERNAMES, payload: { player1, player2 } });
    history.push("/game");
};
