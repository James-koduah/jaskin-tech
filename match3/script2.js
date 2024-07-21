document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const scoreDisplay = document.getElementById('score');
    const width = 8;
    const tiles = [];
    let score = 0;

    // Create a board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const tile = document.createElement('div');
            tile.setAttribute('id', i);
            tile.classList.add('tile');
            tile.style.backgroundColor = getRandomColor();
            gameBoard.appendChild(tile);
            tiles.push(tile);

            tile.addEventListener('click', tileClick);
        }
    }

    const colors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue'];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Handle tile click
    function tileClick() {
        const tileId = parseInt(this.id);
        const color = this.style.backgroundColor;
        checkAdjacentTiles(tileId, color);
    }

    function checkAdjacentTiles(tileId, color) {
        const adjacentTiles = [
            tileId - 1,        // left
            tileId + 1,        // right
            tileId - width,    // top
            tileId + width     // bottom
        ];

        const validAdjacentTiles = adjacentTiles.filter(id => {
            return id >= 0 && id < width * width &&
                tiles[id].style.backgroundColor === color;
        });

        if (validAdjacentTiles.length > 0) {
            score += validAdjacentTiles.length + 1; // Including the clicked tile
            scoreDisplay.innerHTML = 'Score: ' + score;

            validAdjacentTiles.forEach(id => {
                tiles[id].style.backgroundColor = getRandomColor();
            });
            tiles[tileId].style.backgroundColor = getRandomColor();
        }
    }

    createBoard();
});
