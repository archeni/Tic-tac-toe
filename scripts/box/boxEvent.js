import { playerNow } from "../player/player.js";

let gameActive = true;

let gameState = ["", "", "", "", "", "", "", "", ""];

export const pleaseWork = () => {
    document.querySelectorAll('.miniBox').forEach(miniBox => miniBox.addEventListener('click', (handleCellClick) => {
    const clickedCell = handleCellClick.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('id')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    // handleResultValidation();
}));
}
let currentPlayer = playerNow()

const handleCellPlayed = (clickedCell, clickedCellIndex) =>{
    /*
    We update our internal game state to reflect the played move, 
    as well as update the user interface to reflect the played move
    */
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

// export const handleCellClick = (clickedCellEvent) => {

//     const clickedCell = clickedCellEvent.target;

//     const clickedCellIndex = parseInt(
//         clickedCell.getAttribute('id')
//     );
//     if (gameState[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }
//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();
// }


