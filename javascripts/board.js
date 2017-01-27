class Board{
  constructor(){
    this.dots = [["■", "■", "■", "■"], ["■", "■", "■", "■"], ["■", "■", "■", "■"], ["■", "■", "■", "■"]]
  }

  render(callback){
    let $board = $('#board')
    this.dots.forEach((row, x) => {
      $board.append(`<div class="hrow" id='${x}' style="margin: 0px; height: 22px;">`)
      let $row = $('.hrow:last-child')
      row.forEach((column, y) =>{
        if(y === 3){
          $row.append(`<div class="dot" style="margin: 0px; height: 22px;"> </div>`)
        }else{
          $row.append(`<div class="dot" style="margin: 0px; height: 22px;">  </div> <div class="line" id="${x}-${y}"> BOX IT! </div>`)
        }
      })
      $board.append(`</div>`)
      $board.append(`<div class="vrow" id='${x}' style="margin: 0px;">`)

      if(x != 3){
        let $vrow = $('.vrow:last-child')
        $vrow.append(`<div class="column" id="${x}-${1}">  </div><div class="column" id="${x}-${1}">  </div><div class="column" id="${x}-${1}">  </div><div class="lastcolumn" id="${x}-${1}">  </div>`)
      }
    })
    callback()
  }
}
