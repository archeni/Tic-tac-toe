import { playerNow } from "../player/player";

statusDisplay.innerHTML = currentPlayerTurn();


const handleResultValidation = () => {
}

const handleCellClick = () => {
}

const handleRestartGame = () => {
}

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


let currentPlayer = playerNow()