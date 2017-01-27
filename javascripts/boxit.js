class Boxit{
  constructor(){
    this.board = new Board()
    this.playCount = 0
  }

  render(){
    this.board.render(this.addEventHandler.bind(this))
  }

  addEventHandler() {
    $('.line').on('click', function() {console.log(this)
      $(this).css({"background-color": "#662b22"})
    })
    $('.column').on('click', function() {console.log(this)
      $(this).css({"background-color": "#662b22"})
    })
    $('.lastcolumn').on('click', function() {console.log(this)
      $(this).css({"background-color": "#662b22"})
    })
  }

}
