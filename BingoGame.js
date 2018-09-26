function getRandomBingoNumbers(
  minNum = 1,
  maxNum = 90,
  length = 15
) {
  let numberOptionLength = maxNum - minNum + 1

  let numberOptions = Array.apply(null, {
    length: numberOptionLength
  }).map(
    (_num, index) => minNum + index
  )

  return Array.apply(null, {length}).map(
    () => numberOptions.pop(Math.floor(Math.random() * numberOptionLength))
  )
}

class BingoTable {
  constructor() {
    this.numbers = 
  }
}

class BingoPlayer {
  constructor() {

  }
}

class BingoGame {
  constructor({
    nPlayers=2,

  } = options) {
    this.numbers =
    this.played = []
    this.players = new Array(nPlayers).map( item, index => {
      id: 
    })
  }
}
