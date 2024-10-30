//#region 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion

import { print } from './lib/output.mjs';
import { ANSI } from './lib/ansi.mjs';
import { getRandomItemFromArray } from './lib/random.mjs';
import GAME_DICTIONARY from './dictionary.mjs';

const CHOICES = { rock: 1, paper: 2, scissors: 3 };
const LIST_OF_CHOICES = [CHOICES.rock, CHOICES.paper, CHOICES.scissors];

let gameRun = false;

print(GAME_DICTIONARY.en.playtime, ANSI.COLOR.GREEN);

let playtime = await rl.question("");
if(playtime == "Y"){
    gameRun = true;

} 
while(gameRun == true) {

print(ANSI.CLEAR_SCREEN);
print(ANSI.CURSOR_HOME);
print(GAME_DICTIONARY.en.title, ANSI.COLOR.RED);

let player = await askForPlayerChoice();     
let npc = makeAIChoice();

print(`${GAME_DICTIONARY.en.youPicked} ${getDesc(player)} ${GAME_DICTIONARY.en.aiPicked} ${getDesc(npc)}`);
print(GAME_DICTIONARY.en.winner + evaluateWinner(player, npc));

print(GAME_DICTIONARY.en.playAgain, ANSI.COLOR.YELLOW);
let replay = await rl.question("");

if(replay == "N"){
    gameRun = false;
}
}

// ---- Game functions etc..

function evaluateWinner(p1Ch, p2Ch) {
    // Vi går ut i fra at spiller 2 vinner :)
    let result = GAME_DICTIONARY.en.player2;

    // Men vi må sjekke om noe annet skjedde.
    if (p1Ch == p2Ch) {
        result = GAME_DICTIONARY.en.draw;
    } else if (p1Ch == CHOICES.rock) {
        if (p2Ch == CHOICES.scissors) {
            result = GAME_DICTIONARY.en.player1;
        }
    } else if (p1Ch == CHOICES.paper) {
        if (p2Ch == CHOICES.rock) {
            result = GAME_DICTIONARY.en.player1;
        }
    } else if (p1Ch == CHOICES.scissors) {
        if (p2Ch == CHOICES.paper) {
            result = GAME_DICTIONARY.en.player1;
        }
    }

    return result;
}

function makeAIChoice() {
    return getRandomItemFromArray(LIST_OF_CHOICES);
}

function getDesc(choice) {
    return GAME_DICTIONARY.en.choices[choice - 1]
}

async function askForPlayerChoice() {

    let choice = null;

    do {
        print(GAME_DICTIONARY.en.selectionQuestion);
        let rawChocie = await rl.question("");
        rawChocie = rawChocie.toUpperCase();
        choice = evaluatePlayerChoice(rawChocie);
    } while (choice == null)

    return choice;
}

function evaluatePlayerChoice(rawChocie) {
    let choice = null;

    if (rawChocie == GAME_DICTIONARY.en.rock) {
        choice = CHOICES.rock;
    } else if (rawChocie == GAME_DICTIONARY.en.paper) {
        choice = CHOICES.paper;
    } else if (rawChocie == GAME_DICTIONARY.en.scissors) {
        choice = CHOICES.scissors;
    }
    return choice;
}




process.exit();