handleClick(evt) {
 // get x from ID of clicked cell
 const x = +evt.target.id;
 
 // get next spot in column (if none, ignore click)
 const y = this.findSpotForCol(x);
 if (y === null) {
   return;
 }
 
 // place piece in board and add to HTML table
 this.board[y][x] = this.currPlayer;
 this.placeInTable(y, x);
  // check for win
 if (this.checkForWin()) {
   this.gameOver = true;
   return this.endGame(`Player ${this.currPlayer.color} won!`);
 }
  // check for tie
 if (this.board.every(row => row.every(cell => cell))) {
   return this.endGame('Tie!');
 }
  
 // switch players
 
 // this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[2];
 // this.currPlayer = this.currPlayer === this.players[2] ? this.players[0] : this.players[0];
 
if(this.currPlayer === this.players[0]){
 console.log('player 1 turn over')
 return this.currPlayer = this.players[1]
}
 else if(this.currPlayer === this.players[1])
 {console.log('player 2 turn over')
 return this.currPlayer = this.players[2]
 }
 else if(this.currPlayer === this.players[2])
 {console.log('player 3 turn over')
 return this.currPlayer = this.players[0]
 }
 else{this.currPlayer = this.players[0]}
 
 
};
