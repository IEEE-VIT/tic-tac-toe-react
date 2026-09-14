const winPrompt = winner ? (
    <div
        className={
            winner === "No one"
                ? "board__winner board__winner--draw"
                : "board__winner board__winner--win"
        }
    >
        <div className="board__winner--msg">
            {winner === "No one"
                ? "It's a Draw!"
                : `${winner} has won the game!`}
        </div>
        <div className="board__winner--choice">
            Would you like to have another go?
            <button
                type="button"
                className="board__btn"
                onClick={() => resetBoard()}
            >
                Yes
            </button>
            <button
                type="button"
                className="board__btn"
                onClick={() => history.push("/")}
            >
                No
            </button>
        </div>
    </div>
) : null;
