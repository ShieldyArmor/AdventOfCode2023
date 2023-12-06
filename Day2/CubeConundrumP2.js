const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
    input: fs.createReadStream("Day2/gameinput.txt"),
    // input: fs.createReadStream("Day2/test.txt"),
    crlfDelay: Infinity, // Treats \r\n as a single line break
});

const gamesInput = [];

rl.on("line", (line) => {
    gamesInput.push(line);
});

rl.on("close", () => {
console.log(gamesInput);

let games = [];

let gameRX = /Game (\d{1,3})/gi;
let redRX = /(\d{1,3}) red/gi;
let greenRX = /(\d{1,3}) green/gi;
let blueRX = /(\d{1,3}) blue/gi;

function meetsThreshold(game) {
    console.log(game);
    
    if (game.red.some((number) => number > 12)) {
        return false
    }
    else if (game.green.some((number) => number > 13)) {
        return false
    }
    else if (game.blue.some((number) => number > 14)) {
        return false
    }

    return true
}

gamesInput.forEach(game => {
    let gameID = [];
    let red = [];
    let green = [];
    let blue = [];
    while ((match = gameRX.exec(game)) !== null) {
        gameID.push(match[1])
      }
    while ((match = redRX.exec(game)) !== null) {
        red.push(match[1])
      }
    while ((match = greenRX.exec(game)) !== null) {
        green.push(match[1])
      }
    while ((match = blueRX.exec(game)) !== null) {
        blue.push(match[1])
      }

    wholegame = {gameID, red, green, blue}

    console.log(wholegame.red);
    let maxRed = Math.max(...wholegame.red);
    console.log(wholegame.green);
    let maxGreen = Math.max(...wholegame.green);
    console.log(wholegame.blue);
    let maxBlue = Math.max(...wholegame.blue);

    console.log(`Biggest Red, Green and blue: ${maxRed}, ${maxGreen}, ${maxBlue} `);
    let powerNumber = maxRed * maxGreen * maxBlue;
    console.log(powerNumber);

    wholegame.powerNumber = powerNumber
    console.log(wholegame);

    games.push(wholegame)

})

console.log(games);

let answer = 0;

games.forEach(num => {
    answer = answer + Number(num.powerNumber)
    console.log(answer);
})

});