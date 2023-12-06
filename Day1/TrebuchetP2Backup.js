const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
    // input: fs.createReadStream("Day1/calibrationDoc.txt"),
    input: fs.createReadStream("Day1/test2.txt"),
    crlfDelay: Infinity, // Treats \r\n as a single line break
});

const mapObj = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
  };

const calibrationDoc = [];

rl.on("line", (line) => {
  calibrationDoc.push(line);
});

rl.on("close", () => {
console.log(calibrationDoc);

let calibrationNum = []
let calConvert;
let calNum;

calibrationDoc.forEach(calCode => {
    console.log(calCode);
    calConvert = calCode.replace(/(?:one|two|three|four|five|six|seven|eight|nine)/gi, matched => mapObj[matched]);
    console.log(calConvert);
    calNum = calConvert.replace(/\D/g,'');
    // console.log(calNum);
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
    console.log(num);
    console.log(answer);
})

});