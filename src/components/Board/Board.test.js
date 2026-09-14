import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Board from "./Board";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    useHistory: jest.fn(),
}));

describe("Board draw state", () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
        useSelector.mockImplementation((selector) =>
            selector({
                players: {
                    score: { player1: 0, player2: 0 },
                },
            })
        );
        useHistory.mockReturnValue({ push: jest.fn() });
    });

    it("shows a distinct draw message and styling when the board fills without a winner", () => {
        const { container, getByText } = render(<Board />);
        const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];

        moves.forEach((move) => {
            fireEvent.click(container.querySelectorAll(".square")[move]);
        });

        expect(getByText("It's a Draw!")).toBeInTheDocument();
        expect(container.querySelector(".board__winner--msg")).toHaveClass(
            "board__winner--draw"
        );
    });
});
