# Minemopper

A mobile minesweeper game by Grant Abel, Aaron Meija, Teddy Peterschmidt and Henry Oberholtzer

## Technologies

- Expo Go
- TypeScript w some JS as needed
- React Native
- React Toolkit
- Firestore, database

## Features 

- Randomly generated boards, perhaps saved in an archive of games to be "replayable"
- Game timer
- Easy ability to set whether a long press sets a flag or clears a square
- Board scales to phone/device UI size
- Selection of difficulty (easy, medium, hard, custom map by users?)
- Two Player (sort of a race to mark the most mines, maybe the other player can't see what squares the other player has cleared?)
- Cloud save feature
- Cloud leaderboard
- Between games, a pop up add for each contributor (UNSKIPPABLE!!!)

## Functions & Components


### UI Components
- Load Screen (manages loading game on bootup, and saving data)
- Gameboard
    - Renders the minesweeper board based off data recieved from the board generator
    - Has a set size that scales based on the device in question
- Gameboard Tile
    - Tile that either be marked with a flag, or cleared to reveal a number, based on its ID in the board
- Game Controls
    - Allows user to start a new game
    - Flag/Clear Square toggle
- Game Information
    - Timer Component
    - Mines Remaining Component
- Leaderboard Component
    - Fetches data from server showing leaderboards for difficulty or on certain set game maps
- "Ad" Component

### Logic Functions
- Board Generation
    - Generates game board based on chosen difficulty
    - Outputs an object
- Timer
    - 
- dbStore
    - Recieves input to store things to database
        - Gameboards 
        - Game statistics
- dbFetch
    - Retrieves data

### Data Structure

#### Board Data
```
{
    boardID: string,
    difficulty: string,
    board: [0, 0, 0, 1, 0, 0, 1, 0, 1] // Contains the number of mines for the given difficulty
}
```

#### Game Data
```
{
    userName: string,
    userID: string,
    boardID: string,
    time: number,
    date: Date,
}
```

#### Gameboard State Data
```
{
    
}
```

#### User Data
```
{
    userName: string,
    userID: string,
    gameHistory: gameData[],
    gamesPlayed: number, based on game data,
    averageDifficulty: number, based on game data,
    averageTime: number, based on game data,
    location?: City, state, who knows at this point!
}
```