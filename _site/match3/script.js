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
            tile.setAttribute('draggable', true);
            tile.setAttribute('id', i);
            tile.classList.add('tile');
            tile.style.backgroundColor = getRandomColor();
            gameBoard.appendChild(tile);
            tiles.push(tile);
            tile.addEventListener('click', clicked)
            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragend', dragEnd);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
        }
    }

    const colors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue'];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Dragging the tiles
    let colorBeingDragged;
    let colorBeingReplaced;
    let tileIdBeingDragged;
    let tileIdBeingReplaced;

    function clicked(){
        let color = this
    }

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor;
        tileIdBeingDragged = parseInt(this.id);
    }

    function dragEnd() {
        // Valid move?
        let validMoves = [
            tileIdBeingDragged - 1,
            tileIdBeingDragged - width,
            tileIdBeingDragged + 1,
            tileIdBeingDragged + width,
        ];
        let validMove = validMoves.includes(tileIdBeingReplaced);

        if (tileIdBeingReplaced && validMove) {
            tileIdBeingReplaced = null;
        } else if (tileIdBeingReplaced && !validMove) {
            tiles[tileIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
            tiles[tileIdBeingDragged].style.backgroundColor = colorBeingDragged;
        } else {
            tiles[tileIdBeingDragged].style.backgroundColor = colorBeingDragged;
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {
        this.style.backgroundColor = colorBeingReplaced;
    }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor;
        tileIdBeingReplaced = parseInt(this.id);
        this.style.backgroundColor = colorBeingDragged;
        tiles[tileIdBeingDragged].style.backgroundColor = colorBeingReplaced;
    }

    // Check for matches
    function checkRowForThree() {
        for (let i = 0; i < 61; i++) {
            let rowOfThree = [i, i + 1, i + 2];
            let decidedColor = tiles[i].style.backgroundColor;
            const isBlank = tiles[i].style.backgroundColor === '';

            if (
                rowOfThree.every(
                    index => tiles[index].style.backgroundColor === decidedColor && !isBlank
                )
            ) {
                score += 3;
                scoreDisplay.innerHTML = 'Score: ' + score;
                rowOfThree.forEach(index => {
                    tiles[index].style.backgroundColor = '';
                });
            }
        }
    }

    function checkColumnForThree() {
        for (let i = 0; i < 47; i++) {
            let columnOfThree = [i, i + width, i + width * 2];
            let decidedColor = tiles[i].style.backgroundColor;
            const isBlank = tiles[i].style.backgroundColor === '';

            if (
                columnOfThree.every(
                    index => tiles[index].style.backgroundColor === decidedColor && !isBlank
                )
            ) {
                score += 3;
                scoreDisplay.innerHTML = 'Score: ' + score;
                columnOfThree.forEach(index => {
                    tiles[index].style.backgroundColor = '';
                });
            }
        }
    }

    window.setInterval(function () {
        checkRowForThree();
        checkColumnForThree();
    }, 100);

    createBoard();
});
