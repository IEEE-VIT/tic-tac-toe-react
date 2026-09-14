import reducer from "./Players Reducer";
import { SET_SCOREBOARD } from "../types";

describe("player reducer", () => {
    it("stores the per-player win counts", () => {
        const nextState = reducer(undefined, {
            type: SET_SCOREBOARD,
            payload: { player1: 2, player2: 1 },
        });

        expect(nextState.score).toEqual({ player1: 2, player2: 1 });
    });
});
