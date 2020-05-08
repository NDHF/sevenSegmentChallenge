let fs = require('fs');

var words = require('an-array-of-english-words');

// const wordArray = [
//         "red", "orange", "yellow", "blue", 
//         "green", "indigo", "violet", "supertransendental"
//     ];

let forbiddenLetters = [
    "k", "m", "v", "w", "x", "z"
];

let longestWordSoFar = "";

let timesItHadToLoopForbiddenLetters = 0;

function loopThroughWordArray(item) {
    let flCounter = 0;

    function loopThroughForbiddenLetters(flItem) {
        if (item.includes(flItem)) {
            flCounter += 1;
        }
    }
    if (item.length >= longestWordSoFar.length) {
        timesItHadToLoopForbiddenLetters += 1;
        forbiddenLetters.forEach(loopThroughForbiddenLetters);
    }
    if (flCounter === 0) {
        if (item.length >= longestWordSoFar.length) {
            console.log(item);
            longestWordSoFar = item;
        }
    }
}

words.forEach(loopThroughWordArray);

if (longestWordSoFar === "") {
    console.log("Unable to find any eligible words");
} else {
    console.log("Longest eligible word: " + longestWordSoFar);
    console.log(
        "Times it had to check a word: " + timesItHadToLoopForbiddenLetters
    );
}