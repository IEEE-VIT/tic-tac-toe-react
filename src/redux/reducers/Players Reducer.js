import { SET_USERNAMES, SET_SCOREBOARD } from "../types";

const initialState = {
    player1: null,
    player2: null,
    score: {
        player1: 0,
        player2: 0,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERNAMES:
            return {
                ...state,
                ...action.payload,
            };

        case SET_SCOREBOARD:
            return {
                ...state,
                score: {
                    ...state.score,
                    ...action.payload,
                },
            };

        default:
            return state;
    }
}
