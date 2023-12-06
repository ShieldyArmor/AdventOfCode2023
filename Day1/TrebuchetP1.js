const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
    input: fs.createReadStream("Day1/calibrationDoc.txt"),
    // input: fs.createReadStream("Day1/test.txt"),
    crlfDelay: Infinity, // Treats \r\n as a single line break
});

const calibrationDoc = [];

rl.on("line", (line) => {
  calibrationDoc.push(line);
});

rl.on("close", () => {
console.log(calibrationDoc);

let calibrationNum = []

calibrationDoc.forEach(calCode => {
    let calNum = calCode.replace(/\D/g,'');
    console.log(calNum);
    calibrationNum.push(calNum)
})

console.log(calibrationNum);

let sumNum = []

calibrationNum.forEach(calNum => {
    numArray = Array.from(calNum)
    console.log(numArray);

    let firstDigit = numArray[0]
    let secondDigit;

    if (numArray.length == 1) {
        secondDigit = firstDigit
    }
    else {
        secondDigit = numArray[numArray.length-1]
    }
    
    console.log("First digit of ^ is: " + firstDigit);
    console.log("second digit of ^ is: " + secondDigit);

    finalNum = `${firstDigit}${secondDigit}`
    console.log(finalNum);
    sumNum.push(finalNum)
})

console.log(sumNum);

let answer = 0;

sumNum.forEach(num => {
    answer = answer + Number(num)
    console.log(answer);
})

});