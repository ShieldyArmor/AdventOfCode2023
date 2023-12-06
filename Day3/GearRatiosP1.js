const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
    input: fs.createReadStream("Day3/test.txt"),
    // input: fs.createReadStream("Day2/test.txt"),
    crlfDelay: Infinity, // Treats \r\n as a single line break
});

const gamesInput = [];


rl.on("line", (line) => {
    lineArray = Array.from(line)
    gamesInput.push(lineArray);
});

rl.on("close", () => {
    let rowIndex = 0
    let colIndex = 0

    gamesInput.forEach(row => {
    console.log("Checking row: " + rowIndex);

    row.forEach(col => {
    let adjacent = [];
    
    if (col != "." ) {
        console.log("Checking character: " + col);
    // console.log("rowIndex: "+rowIndex);
    // console.log("colIndex: "+colIndex);
    // console.log("length: "+gamesInput.length);
    // console.log(gamesInput[rowIndex][colIndex]);

    if (rowIndex > 0) {
        adjacent.push(gamesInput[rowIndex-1][colIndex-1], gamesInput[rowIndex-1][colIndex], gamesInput[rowIndex-1][colIndex+1])
    }

        adjacent.push(gamesInput[rowIndex][colIndex-1], gamesInput[rowIndex][colIndex+1])

    if (rowIndex >= gamesInput.length ) {
        adjacent.push(gamesInput[rowIndex+1][colIndex-1], gamesInput[rowIndex+1][colIndex], gamesInput[rowIndex+1][colIndex+1])
    }

    console.log(adjacent);
    }

    

    
    colIndex +=1
    });

    rowIndex += 1
    colIndex = 0
})

})

