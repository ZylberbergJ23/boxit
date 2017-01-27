class Boxit{
  constructor(){
    this.board = new Board()
    this.lines = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]
    this.columns = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
    this.playCount = 0
  }

  render(){
    this.board.render(this.addEventHandler.bind(this))
  }

  addEventHandler() {
    lineClickListener.bind(this)()
    columnClickListener.bind(this)()
  }

}
