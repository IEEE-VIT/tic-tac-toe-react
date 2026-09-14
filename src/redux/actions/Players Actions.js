/* eslint-disable no-unused-vars */
import { SET_USERNAMES, SET_SCOREBOARD } from "../types";

export const setPlayers = (player1, player2, history) => (
    dispatch,
    getState
) => {
    dispatch({ type: SET_USERNAMES, payload: { player1, player2 } });
    dispatch({
        type: SET_SCOREBOARD,
        payload: { player1: 0, player2: 0 },
    });
    history.push("/game");
};

export const setScoreboard = (player1, player2) => (dispatch) => {
    dispatch({
        type: SET_SCOREBOARD,
        payload: { player1, player2 },
    });
};
