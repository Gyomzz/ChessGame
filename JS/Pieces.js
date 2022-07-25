export class Pieces {
    constructor(start, color) {
        this.color = color;
        this.current = start;
        this.onBoard = true;
        this.img = document.createElement("img");
    }

    to(target) {
        this.current = target;
        this.domEl.style.gridArea = target;
    }

    static toXY = ([xLetter, y]) => {
        return {
            x:'ABCDEFGH'.indexOf(xLetter),
            y:Number(y)
        }
    }

    isValidMove(target) {
        const start = Pieces.toXY(this.current);
        const end = Pieces.toXY(target);
        const possiblePiece = pieceOnTarget([end.x , end.y]);
        action(start, end, possiblePiece);
    }

    action(start, end, piece) {
        if(canMove(start, end) && piece != undefined) {
            if(canTakePiece(piece) == true) {
                piece.onBoard = false;
                return true
            }
        } else {
            return canMove(start, end)
        }
    }
}

export class King extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.img.src = `./assets/Pieces/${color}/King.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
        }
        else {
            console.log("Cant do that !");
        }
    }

    canMove(start, end) {
        return ( Math.abs(start.x - end.x) == 1 && Math.abs(start.y - end.y) == 1 ) 
        || ( Math.abs(start.x - end.x) == 0 && Math.abs(start.y - end.y) == 1 )
        || ( Math.abs(start.x - end.x) == 1 && Math.abs(start.y - end.y) == 0 )
    }
}

export class Queen extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.img.src = `./assets/Pieces/${color}/Queen.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
        }
        else {
            console.log("Cant do that !");
        }
    }

    canMove(start, end) {
        canDiagonalMove(start, end) || canLateralMove(start, end)
    }
}

export class Rook extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.img.src = `./assets/Pieces/${color}/Rook.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
        }
        else {
            console.log("Cant do that !");
        }
    }
    
    canMove(start, end) {
        canLateralMove(start, end)
    }
}

export class Bishop extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.img.src = `./assets/Pieces/${color}/Bishop.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
        }
        else {
            console.log("Cant do that !");
        }
    }

    canMove(start, end) {
        canDiagonalMove(start, end)
    }
}

export class Knigth extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.img.src = `./assets/Pieces/${color}/Knigth.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
        }
        else {
            console.log("Cant do that !");
        }
    }

    canMove(start, end) {
        return ( Math.abs(start.x - end.x) === 1 && Math.abs(start.y - end.y) === 2 ) 
        || 
        ( Math.abs(start.x - end.x) === 2 && Math.abs(start.y - end.y) === 1 )
    }
}

export class Pawn extends Pieces {
    constructor(start, color) {
        super(start, color);
        this.firstMovement = false;
        this.img.src = `./assets/Pieces/${color}/Pawn.png`;
    }

    to(target) {
        if(this.isValidMove(target)) {
            super.to(target);
            this.firstMovement = true;
        }
        else {
            console.log("Cant do that !");
        }
    }

    canMove(start, end) {
        if(this.firstMovement) {
            return ( Math.abs(start.y - end.y) == 1 || Math.abs(start.y - end.y) == 2 )
        } else {
            return ( Math.abs(start.y - end.y) == 1 )
        }
    }
}

export const canTakePiece = (attackPiece, pieceToAttack) => {
    return attackPiece.color != pieceToAttack.color
}

export const pieceOnTarget = ([xLetter, y]) => {
    return piecesOnBoard.find( piece => piece.x == xLetter && piece.y == y)
}

export const canLateralMove = (start, end) => {
    return ( Math.abs(start.x - end.x) != 0 && Math.abs(start.y - end.y) == 0)
    ||
    ( Math.abs(start.x - end.x) == 0 && Math.abs(start.y - end.y) != 0)
}

export const canDiagonalMove = (start, end) => {
    return (Math.abs(start.x - end.x) === Math.abs(start.y - end.y))
}

export const piecesOnBoard = new Array();