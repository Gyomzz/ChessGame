import * as Pieces from './Pieces.js';

const board = document.getElementById('boardInner');
const setupButton = document.getElementById('setup-button');
const letters = 'ABCDEFGH';
let side = false;

setupButton.addEventListener('click', event => {
    if(setupButton.innerText == "Start Game") {
        setupButton.innerText = "Stop Game";
        setUpBoard(board);
        setupPieces();
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
            let letter = i % 2 === 0 ? letters[j] : letters.split("").reverse().join("")[j];
            square.id = `${letter} ${i + 1}`;
            square.style.backgroundColor = j % 2 === 0 ? "rgba(209,139,70,255)" : "rgba(254,206,158,255)";
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

const setupLetter = (index, element) => {
    let letter = document.createElement("div");
    letter.innerText = letters.split("").reverse().join("")[index];
    letter.style.position = "absolute";
    letter.style.bottom = "0";
    letter.style.right = "0";
    element.appendChild(letter);
}

const setupNumber = (rowIndex, colIndex, element) => {
    let number = document.createElement("span");
    number.innerText = rowIndex + 1;
    if(rowIndex % 2 === 0 && colIndex == 0 || rowIndex % 2 != 0 && colIndex == 7) {
        element.appendChild(number);
    }
}

const setupPieces = () => {
    setupTopPieces("White");
    setupBotPieces("Black");
}

const setupTopPieces = (color) => {
    setupTopPawn(color);
    setupTopRooks(color);
    setupTopBishops(color);
    setupTopKnigths(color);
    setupTopQueenKing(color);
}

const setupBotPieces = (color) => {
    setupBotPawn(color);
    setupBotRooks(color);
    setupBotBishops(color);
    setupBotKnigths(color);
    setupBotQueenKing(color);
}

const setupBotPawn = (color) => {
    for(let i = 0; i < 8; i++) {
        let square = document.getElementById(`${letters[i]} 7`);
        let pawn = new Pieces.Pawn({x: 'A', y: 7}, color);
        let img = pawn.img;
        img.className = "pieces";
        square.appendChild(img);
    }
}

const setupTopPawn = (color) => {
    for(let i = 0; i < 8; i++) {
        let square = document.getElementById(`${letters[i]} 2`);
        let pawn = new Pieces.Pawn({x: 'A', y: 2}, color);
        let img = pawn.img;
        img.className = "pieces";
        square.appendChild(img);
    }
}

const setupTopRooks = (color) => {
    let rightRook = new Pieces.Rook({x: 'A', y: 1}, color)
    let leftRook = new Pieces.Rook({x: 'H', y: 1}, color)
    let img = rightRook.img
    img.className = "pieces";
    let leftSquare = document.getElementById('H 1')
    let rightSquare = document.getElementById('A 1')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupBotRooks = (color) => {
    let rightRook = new Pieces.Rook({x: 'A', y: 8}, color)
    let leftRook = new Pieces.Rook({x: 'H', y: 8}, color)
    let img = rightRook.img
    img.className = "pieces";
    let leftSquare = document.getElementById('H 8')
    let rightSquare = document.getElementById('A 8')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupTopBishops = (color) => {
    let rightBishop = new Pieces.Bishop({x: 'C', y: 1}, color)
    let leftBishop = new Pieces.Bishop({x: 'F', y: 1}, color)
    let img = rightBishop.img
    img.className = "pieces";
    let leftSquare = document.getElementById('F 1')
    let rightSquare = document.getElementById('C 1')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupBotBishops = (color) => {
    let rightBishop = new Pieces.Bishop({x: 'C', y: 8}, color)
    let leftBishop = new Pieces.Bishop({x: 'F', y: 8}, color)
    let img = rightBishop.img
    img.className = "pieces";
    let leftSquare = document.getElementById('F 8')
    let rightSquare = document.getElementById('C 8')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupTopKnigths = (color) => {
    let rightKnight = new Pieces.Knigth({x: 'B', y: 1}, color)
    let leftKnight = new Pieces.Knigth({x: 'G', y: 1}, color)
    let img = rightKnight.img
    img.className = "pieces";
    let leftSquare = document.getElementById('G 1')
    let rightSquare = document.getElementById('B 1')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupBotKnigths = (color) => {
    let rightKnight = new Pieces.Knigth({x: 'B', y: 8}, color)
    let leftKnight = new Pieces.Knigth({x: 'G', y: 8}, color)
    let img = rightKnight.img
    img.className = "pieces";
    let leftSquare = document.getElementById('G 8')
    let rightSquare = document.getElementById('B 8')
    leftSquare.appendChild(img)
    rightSquare.appendChild(img.cloneNode())
}

const setupTopQueenKing = (color) => {
    let king = new Pieces.King({x: 'E', y: 1}, color)
    let queen = new Pieces.Queen({x: 'D', y: 1}, color)
    let qImg = queen.img
    let kImg = king.img
    let kingSquare = document.getElementById('E 1')
    let queenSquare = document.getElementById('D 1')
    kingSquare.appendChild(kImg)
    queenSquare.appendChild(qImg)
}

const setupBotQueenKing = (color) => {
    let king = new Pieces.King({x: 'E', y: 8}, color)
    let queen = new Pieces.Queen({x: 'D', y: 8}, color)
    let qImg = queen.img
    let kImg = king.img
    qImg.className = "pieces"
    kImg.className = "pieces"
    console.log(qImg);
    let kingSquare = document.getElementById('E 8')
    let queenSquare = document.getElementById('D 8')
    kingSquare.appendChild(kImg)
    queenSquare.appendChild(qImg)
}