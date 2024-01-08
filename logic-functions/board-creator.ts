const emptyBoardCreator = (xLength: number, yLength: number) => {
  return new Array(yLength).fill(Array(xLength).fill(0));
}

const randomInt = (max) => Math.floor(Math.random() * max);

const newMinePlacement = (numberOfMines: number, board: number[]) => {
  let placedTiles = []
  let newBoard = board;
  for (let i = numberOfMines; i > 0;) {
    const tileToPlace = randomInt(board.length)
    if (placedTiles.includes(tileToPlace)) {

    } else {
      newBoard[tileToPlace] = 10;
      placedTiles.push(tileToPlace);
      i--;
    }
  }
  return newBoard;
}

const minePlacement = (numberOfMines: number, board: number[][]) => {
  const boardIndexSize = board.flat().length - 1;
  const rowIndexLength = board[0].length - 1;
  let placedTiles = []
  let newBoard = board;
  for (let i = numberOfMines; i > 0;) {
    const mineIndex = randomInt(boardIndexSize)
    if (placedTiles.includes(mineIndex)) {

    } else {
      const yCoord = Math.round(mineIndex / rowIndexLength);
      const xCoord = mineIndex % rowIndexLength;
      newBoard[yCoord][xCoord] = 10;
      placedTiles.push(mineIndex);
      i--;
    }
  }
  return newBoard;
}
