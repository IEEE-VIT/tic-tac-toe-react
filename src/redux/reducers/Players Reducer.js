import { SET_USERNAMES, INCREMENT_SCORE } from "../types";

const initialState = {
    player1: null,
    player2: null,
    player1Score: 0,
    player2Score: 0,
};

const scoreKeys = {
    "Player 1": "player1Score",
    "Player 2": "player2Score",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERNAMES:
            return {
                ...state,
                ...action.payload,
            };

        case INCREMENT_SCORE: {
            const scoreKey = scoreKeys[action.payload];
            if (!scoreKey) return state;
            return {
                ...state,
                [scoreKey]: state[scoreKey] + 1,
            };
        }

        default:
            return state;
    }
}
