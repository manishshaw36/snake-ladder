export class Player {
    score: number = 0;
    hasFinished: boolean = false;
    isWinner: boolean = false;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const playerColors: string[] = ['Red', 'Blue', 'Yellow', 'Green'];

export const getTotalPlayer = (value: number) => {
    let players: Player[] = [];
    for(let i = 0; i < value; i++) {
        players.push(new Player(playerColors[i]))
    }
    return players;
}

export class InitialState {
    totalPlayer: number = 2;
    activePlayer: number = 0;
    playerInfo: Player[] = getTotalPlayer(2);
    isFinished: boolean = false;
    diceCaption: string = "Click on Dice to Roll";
    totalCells: number = 16;
    eachRowCells: number = 4;
    diceValue: number = 1;
    start: boolean = false;
}