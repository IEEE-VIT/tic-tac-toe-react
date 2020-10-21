import { SET_USERNAMES } from "../types";

const initialState = {
    player1: null,
    player2: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERNAMES:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
