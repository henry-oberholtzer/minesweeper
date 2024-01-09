const randomInt = (max: number) => Math.floor(Math.random() * max);

const newBoardWithMines = (numberOfMines: number, boardSize: number) => {
  let placedTiles = [];
  let boardFlat = new Array(boardSize).fill(0);
  for (let i = numberOfMines; i > 0;) {
    const tileToPlace = randomInt(boardSize)
    if (placedTiles.includes(tileToPlace)) {

    } else {
      boardFlat[tileToPlace] = 10;
      placedTiles.push(tileToPlace);
      i--;
    }
  }
  return boardFlat;
}

const makeBoardGrid = (boardFlat: number[], xLength: number) => {
  const boardGrid = [];
  while(boardFlat.length) boardGrid.push(boardFlat.splice(0, xLength));
  return boardGrid;
}

const calculateProximity = (board: number[][]) => {
  const proximityBoard = board.map((row, y) => {
    return row.map((square, x) => {
      if (square === 10) {
        return square;
      } else {
        let proximityCount = 0;

        if(board[y - 1]) {
          if (board[y - 1][x - 1] === 10) {
            proximityCount++;
          }
          if (board[y - 1][x] === 10) {
            proximityCount++;
          }
          if (board[y - 1][x + 1] === 10) {
            proximityCount++;
          }
        }
        if (board[y][x - 1] === 10) {
          proximityCount++;
        }
        if (board[y][x + 1] === 10) {
          proximityCount++;
        }
        if(board[y + 1]) {
          if (board[y + 1][x - 1] === 10) {
            proximityCount++;
          }
          if (board[y + 1][x] === 10) {
            proximityCount++;
          }
          if (board[y + 1][x + 1] === 10) {
            proximityCount++;
          }
        }
        return proximityCount;
      }
    })
  })
  return proximityBoard;
}

const boardGenerator = (xLength: number, yLength: number, numberOfMines: number) => {
  return calculateProximity(makeBoardGrid(newBoardWithMines(numberOfMines, xLength * yLength), xLength))
}

export default boardGenerator;

console.log(boardGenerator(8, 8, 62))
