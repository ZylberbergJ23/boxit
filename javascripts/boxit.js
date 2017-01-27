class Boxit{
  constructor(){
    this.board = new Board()
    this.lines = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]
    this.columns = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
    this.playCount = 0
    this.player1 = new Player("patty")
    this.player2 = new Player("jonathan")
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

}
