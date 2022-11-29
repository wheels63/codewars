// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

function solution (roman) {
    
    let romanArr = roman.split("");

    let output = 0;

    let legend = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < romanArr.length; i++) {
        let currentChar = romanArr[i];
        let nextChar = romanArr[i+1];
        
        if (currentChar === "C" && nextChar === "M") {
            output += 900;
            i++;
        } else if (currentChar === "C" && nextChar === "D") {
            output += 400;
            i++;
        } else if (currentChar === "X" && nextChar === "C") {
            output += 90;
            i++;
        } else if (currentChar === "X" && nextChar === "L") {
            output += 40;
            i++;
        } else if (currentChar === "I" && nextChar === "X") {
            output += 9;
            i++;
        } else if (currentChar === "I" && nextChar === "V") {
            output += 4;
            i++;
        } else {
            output += legend[currentChar]
        }
    }

    return output;
}