const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

function handleClick(e) {
    if (!gameOver && !e.target.textContent) {
        e.target.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const columns = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    const diagonals = [
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winningCombinations = [...rows, ...columns, ...diagonals];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        const [aCell, bCell, cCell] = [cells[a].textContent, cells[b].textContent, cells[c].textContent];

        if (aCell && bCell && cCell && aCell === bCell && bCell === cCell) {
            gameOver = true;
            document.querySelector('.grid').classList.add('game-over');
            return;
        }
    }

    if (!cells.some((cell) => !cell.textContent)) {
        gameOver = true;
        document.querySelector('.grid')
    }
}