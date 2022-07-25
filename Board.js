import * as Pieces from './Pieces.js';

const board = document.getElementById('boardInner');
const setupButton = document.getElementById('setup-button');

setupButton.addEventListener('click', event => {
    if(setupButton.innerText == "Start Game") {
        setupButton.innerText = "Stop Game";
        setUpBoard(board);
    } else {
        setupButton.innerText = "Start Game";
        cleanBoard(board);
    }
})

const cleanBoard = (board) => {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
    board.style.visibility = 'hidden';
}

const setUpBoard = (board) => {
    board.style.visibility = 'visible';
    for(let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.id = `row ${i}`;
        row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
        for(let j = 0; j < 8; j++) {
            let square = document.createElement("div");
            square.className = "square";
            setupNumber(i, j, square);
            if(i == 7) {
                setupLetter(j, square);
            }
            square.style.display = 'flex';
            square.style.position = "relative";
            square.style.backgroundColor = j % 2 === 0 ? "white" : "black";
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

const setupLetter = (index, element) => {
    let letters = 'ABCDEFGH';
    let letter = document.createElement("div");
    letter.innerText = letters.split("").reverse().join("")[index];
    letter.style.color = index % 2 === 0 ? 'black' : 'white';
    letter.style.position = "absolute";
    letter.style.bottom = "0";
    letter.style.right = "0";
    element.appendChild(letter);
}

const setupNumber = (rowIndex, colIndex, element) => {
    let number = document.createElement("span");
    number.innerText = rowIndex + 1;
    number.style.color = rowIndex % 2 === 0 ? 'black' : 'white';
    if(rowIndex % 2 === 0 && colIndex == 0 || rowIndex % 2 != 0 && colIndex == 7) {
        element.appendChild(number);
    }
}