import readlineSync from 'readline-sync';

enum RockPaperScissors {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
}

interface PlayerOptions {
    name: string;
    selected?: RockPaperScissors; // the enum
}

type Result = "tie" | "player1" | "player2";


const playGame = (player1:PlayerOptions, player2:PlayerOptions):Result => {
    const player1Selection = makeSelection(player1);
    const player2Selection = makeSelection(player2);

    player1.selected = player1Selection;
    player2.selected = player2Selection;

    const result = getResult(player1Selection, player2Selection);

    return result;
}

const makeSelection = (player:PlayerOptions):RockPaperScissors => {
    const playerName = player.name;
    console.log(`${playerName} enter selection(p for paper, r for rock, s for scissors)`);

    const playerSelection = readlineSync.prompt();
    if (playerSelection === 's') {
        return RockPaperScissors.Scissors;

    }else if(playerSelection === 'r'){
        return RockPaperScissors.Rock;

    }else if(playerSelection === 'p'){
        return RockPaperScissors.Paper;

    }else{
        throw new Error("Choice not possible");
    }
}


const getResult = (selection1:RockPaperScissors, selection2:RockPaperScissors):Result => {
    if (selection1 === selection2) {
        return "tie";
    }
    if(selection1 === RockPaperScissors.Paper){
        if (selection2 === RockPaperScissors.Rock) {
            return "player1";
        }else{
            return "player2"
        }
    }
    else if(selection1 === RockPaperScissors.Rock){
        if(selection2 === RockPaperScissors.Scissors){
            return "player1";
        }else{
            return "player2"
        }
    }
    else{
        if(selection2 === RockPaperScissors.Paper){
            return "player1";
        }else{
            return "player2"
        }
    }
}


const player1: PlayerOptions = {
    name:'yosy',
}

const player2: PlayerOptions = {
    name:'manash',
}

console.log(playGame(player1, player2));
