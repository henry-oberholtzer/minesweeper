// import { useState } from 'react'


// const mineTouch = (board: [], row: number, tile: number) => {
//     const [mineTotal, setMineTotal] = useState<number>(0);

//     function chooseVariable(input) = {
//       if (input === mineVar) {
//         setMineTotal(mine + 1)
//       }
//       if (input === spaceVar ) {
//         setSpace(reveal);
//         spaceChecker(tile+1, tile-1, row+1, row-1)
//       }
//     }

//     const spaceChecker(tile) {
//       //check tile below
//       if (board[row +1][tile] === variable) {
//           chooseVariable()
//       }
//       //check above
//       if (board[row -1][tile] === variable) {
//           chooseVariable()
//       }
//       //check right
//       if (board[row][tile + 1] === variable) {
//           chooseVariable()
//       }
//       //check left
//       if (board[row][tile - 1] === variable) {
//           chooseVariable()
//       }
//       //check below + right
//       if (board[row +1][tile + 1] === variable) {
//           chooseVariable()
//       }
//       //check above + right
//       if (board[row -1][tile +1] === variable) {
//           chooseVariable()
//       }
//       //check below + left
//       if (board[row +1][tile - 1] === variable) {
//           chooseVariable()
//       }
//       //check above + left
//       if (board[row -1][tile - 1] === variable) {
//           chooseVariable
//       }
//       // if (board[row][tile] === 10) {
//       //     loseCondition(
//       // }

//       return mineTotal

//   }
// }

