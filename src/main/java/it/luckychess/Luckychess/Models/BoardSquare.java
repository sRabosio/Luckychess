package it.luckychess.Luckychess.Models;

public class BoardSquare {
    private IPiece piece;

    public IPiece getPiece() {
        return piece;
    }

    public void setPiece(IPiece piece) {
        this.piece = piece;
    }

    public boolean hasPiece(){
        return piece == null;
    }
}
