import * as Pieces from './Pieces.js';

const board = document.getElementById('boardInner');

board.onclick = (e) => {
    if(e.target.id.includes("piece")) {
        console.log(e.target.id)
    }
}