class Boxit{
  constructor(){
    this.board = new Board()
    this.lines = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]
    this.columns = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
    this.playCount = 0
    this.player1 = new Player("prompt('What is your name?')")
    this.player2 = new Player("prompt('What is your name?')")
  }

  render(){
    this.board.render(this.addEventHandler.bind(this))
  }

  addEventHandler() {
    lineClickListener.bind(this)()
    columnClickListener.bind(this)()
  }

  playerTurn(){
    if (this.playCount % 2 === 0){
      return this.player1
    }
    else {
      return this.player2
    }
  }

  otherPlayer(){
    if (this.playCount % 2 === 0){
      return this.player2
    }
    else {
      return this.player1
    }
  }

}
