"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var RockPaperScissors;
(function (RockPaperScissors) {
    RockPaperScissors["Rock"] = "rock";
    RockPaperScissors["Paper"] = "paper";
    RockPaperScissors["Scissors"] = "scissors";
    RockPaperScissors["None"] = "";
})(RockPaperScissors || (RockPaperScissors = {}));
const playGame = (player1, player2) => {
    const player1Selection = makeSelection(player1);
    const player2Selection = makeSelection(player2);
    player1.selected = player1Selection;
    player2.selected = player2Selection;
    const result = getResult(player1Selection, player2Selection);
    return result;
};
const makeSelection = (player) => {
    const playerName = player.name;
    console.log(`${playerName} enter selection(p for paper, r for rock, s for scissors)`);
    const playerSelection = readline_sync_1.default.prompt();
    if (playerSelection === 's') {
        return RockPaperScissors.Scissors;
    }
    else if (playerSelection === 'r') {
        return RockPaperScissors.Rock;
    }
    else if (playerSelection === 'p') {
        return RockPaperScissors.Paper;
    }
    else {
        throw new Error("Choice not possible");
    }
};
const getResult = (selection1, selection2) => {
    if (selection1 === selection2) {
        return "tie";
    }
    if (selection1 === RockPaperScissors.Paper) {
        if (selection2 === RockPaperScissors.Rock) {
            return "player1";
        }
        else {
            return "player2";
        }
    }
    else if (selection1 === RockPaperScissors.Rock) {
        if (selection2 === RockPaperScissors.Scissors) {
            return "player1";
        }
        else {
            return "player2";
        }
    }
    else {
        if (selection2 === RockPaperScissors.Paper) {
            return "player1";
        }
        else {
            return "player2";
        }
    }
};
const player1 = {
    name: 'yosy',
};
const player2 = {
    name: 'manash',
};
console.log(playGame(player1, player2));
