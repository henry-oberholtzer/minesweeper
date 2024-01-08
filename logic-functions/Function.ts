import { useState } from 'react'


const mineTouch = (board: [], row: number, tile: number) => {
    const [mineTotal, setMineTotal] = useState<number>(0);


    //check tile below
    if (board[row +1][tile] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check above
    if (board[row -1][tile] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check right
    if (board[row][tile + 1] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check left
    if (board[row][tile - 1] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check below + right
    if (board[row +1][tile + 1] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check above + right
    if (board[row -1][tile +1] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check below + left
    if (board[row +1][tile - 1] === 10) {
        setMineTotal(mineTotal + 1)
    }
    //check above + left
    if (board[row -1][tile - 1] === 10) {
        setMineTotal(mineTotal + 1)
    }

    return mineTotal

}
