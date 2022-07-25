import * as Pieces from './Pieces.js';

const board = document.getElementById('boardInner');
const setupButton = document.getElementById('setup-button');
const letters = 'ABCDEFGH';
let side = false;
let pieceCount = 0;

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
    let numbers = '12345678';
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
            let number = i % 2 === 0 ? numbers[j] : numbers.split("").reverse().join("")[j];
            square.id = `${number} ${i + 1}`;
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

// PIECES ==================++++++++=====>

const setupPieces = () => {
    if(side) {
        setupTopPieces("White");
        setupBotPieces("Black");
        side = !side
    } else {
        setupTopPieces("Black");
        setupBotPieces("White");
        side = !side
    }
    console.log(Pieces.piecesOnBoards)
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
        let square = document.getElementById(`${i + 1} 7`);
        pieceCount++;
        let pawn = new Pieces.Pawn({x: i + 1, y: 7}, color, pieceCount);
        let img = pawn.img;
        img.className = "pieces";
        square.appendChild(img);
        Pieces.piecesOnBoards.push(pawn)
    }
}

const setupTopPawn = (color) => {
    for(let i = 0; i < 8; i++) {
        let square = document.getElementById(`${i + 1} 2`);
        pieceCount++;
        let pawn = new Pieces.Pawn({x: i + 1, y: 2}, color, pieceCount);
        let img = pawn.img;
        img.className = "pieces";
        square.appendChild(img);
        Pieces.piecesOnBoards.push(pawn)
    }
}

const setupTopRooks = (color) => {
    pieceCount++;
    let leftRook = new Pieces.Rook({x: 1, y: 1}, color, pieceCount)
    pieceCount++;
    let rightRook = new Pieces.Rook({x: 8, y: 1}, color, pieceCount)
    let leftImg = leftRook.img
    let rightImg = rightRook.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('8 1')
    let rightSquare = document.getElementById('1 1')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftRook)
    Pieces.piecesOnBoards.push(rightRook)
}

const setupBotRooks = (color) => {
    pieceCount++;
    let leftRook = new Pieces.Rook({x: 1, y: 1}, color, pieceCount)
    pieceCount++;
    let rightRook = new Pieces.Rook({x: 8, y: 1}, color, pieceCount)
    let leftImg = leftRook.img
    let rightImg = rightRook.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('8 8')
    let rightSquare = document.getElementById('1 8')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftRook)
    Pieces.piecesOnBoards.push(rightRook)
}

const setupTopBishops = (color) => {
    pieceCount++;
    let leftBishop = new Pieces.Bishop({x: 3, y: 1}, color, pieceCount)
    pieceCount++;
    let rightBishop = new Pieces.Bishop({x: 6, y: 1}, color, pieceCount)
    let leftImg = leftBishop.img
    let rightImg = rightBishop.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('6 1')
    let rightSquare = document.getElementById('3 1')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftBishop)
    Pieces.piecesOnBoards.push(rightBishop)
}

const setupBotBishops = (color) => {
    pieceCount++;
    let leftBishop = new Pieces.Bishop({x: 3, y: 8}, color, pieceCount)
    pieceCount++;
    let rightBishop = new Pieces.Bishop({x: 6, y: 8}, color, pieceCount)
    let leftImg = leftBishop.img
    let rightImg = rightBishop.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('6 8')
    let rightSquare = document.getElementById('3 8')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftBishop)
    Pieces.piecesOnBoards.push(rightBishop)
}

const setupTopKnigths = (color) => {
    pieceCount++;
    let leftKnight = new Pieces.Knigth({x: 2, y: 1}, color, pieceCount)
    pieceCount++;
    let rightKnight = new Pieces.Knigth({x: 7, y: 1}, color, pieceCount)
    let leftImg = leftKnight.img
    let rightImg = rightKnight.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('7 1')
    let rightSquare = document.getElementById('2 1')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftKnight)
    Pieces.piecesOnBoards.push(rightKnight)
}

const setupBotKnigths = (color) => {
    pieceCount++;
    let leftKnight = new Pieces.Knigth({x: 2, y: 1}, color, pieceCount)
    pieceCount++;
    let rightKnight = new Pieces.Knigth({x: 7, y: 1}, color, pieceCount)
    let leftImg = leftKnight.img
    let rightImg = rightKnight.img
    leftImg.className = "pieces";
    rightImg.className = "pieces";
    let leftSquare = document.getElementById('7 8')
    let rightSquare = document.getElementById('2 8')
    leftSquare.appendChild(leftImg)
    rightSquare.appendChild(rightImg)
    Pieces.piecesOnBoards.push(leftKnight)
    Pieces.piecesOnBoards.push(rightKnight)
}

const setupTopQueenKing = (color) => {
    pieceCount++;
    let king = new Pieces.King({x: 5, y: 1}, color, pieceCount)
    pieceCount++;
    let queen = new Pieces.Queen({x: 4, y: 1}, color, pieceCount)
    let qImg = queen.img
    let kImg = king.img
    let kingSquare = document.getElementById('5 1')
    let queenSquare = document.getElementById('4 1')
    kingSquare.appendChild(kImg)
    queenSquare.appendChild(qImg)
    Pieces.piecesOnBoards.push(king)
    Pieces.piecesOnBoards.push(queen)
}

const setupBotQueenKing = (color) => {
    pieceCount++;
    let king = new Pieces.King({x: 5, y: 1}, color, pieceCount)
    pieceCount++;
    let queen = new Pieces.Queen({x: 4, y: 1}, color, pieceCount)
    let qImg = queen.img
    let kImg = king.img
    let kingSquare = document.getElementById('5 8')
    let queenSquare = document.getElementById('4 8')
    kingSquare.appendChild(kImg)
    queenSquare.appendChild(qImg)
    Pieces.piecesOnBoards.push(king)
    Pieces.piecesOnBoards.push(queen)
}
