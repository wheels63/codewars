// https://adventofcode.com/2022/day/2

// function scoreCalculator(list) {
    
//     let score = 0;

//     for (let i = 0; i < list.length-3; i+=4) {
//         let opp = list[i];
//         let me = list[i+2];

//         if (opp === "A" && me === "X") {
//             score += 1+3;
//         } else if (opp === "A" && me === "Y") {
//             score += 2+6;
//         } else if (opp === "A" && me === "Z") {
//             score += 3+0;
//         } else if (opp === "B" && me === "Z") {
//             score += 3+6;
//         } else if (opp === "B" && me === "X") {
//             score += 1+0;
//         } else if (opp === "B" && me === "Y") {
//             score += 2+3;
//         } else if (opp === "C" && me === "X") {
//             score += 1+6;
//         } else if (opp === "C" && me === "Y") {
//             score += 2+0;
//         } else if (opp === "C" && me === "Z") {
//             score += 3+3;
//         }

//     }    
//     return score;
// }

function scoreCalculator(list) {
    
    let score = 0;

    for (let i = 0; i < list.length-3; i+=4) {
        let opp = list[i];
        let me = list[i+2];

        if (opp === "A" && me === "X") {
            score += 3+0;
        } else if (opp === "A" && me === "Y") {
            score += 1+3;
        } else if (opp === "A" && me === "Z") {
            score += 2+6;
        } else if (opp === "B" && me === "Z") {
            score += 3+6;
        } else if (opp === "B" && me === "X") {
            score += 1+0;
        } else if (opp === "B" && me === "Y") {
            score += 2+3;
        } else if (opp === "C" && me === "X") {
            score += 2+0;
        } else if (opp === "C" && me === "Y") {
            score += 3+3;
        } else if (opp === "C" && me === "Z") {
            score += 1+6;
        }

    }    
    return score;
}

let guide = `B Z
A Z
B Z
C Z
C Z
B X
A X
C X
A Z
C Y
C X
C Y
C Y
A X
A Z
A Z
A X
B Z
B X
A Z
A X
C Y
A X
B Z
B Z
A X
C Z
A Z
A X
B Z
A Z
A Y
C Y
A Z
C Z
A Z
C Y
C Z
C Z
A Z
A X
A X
B X
A Z
B Z
A X
A Z
A Z
A X
A X
C Y
A Z
B X
C Y
A X
B Y
A Z
A X
A Z
A X
C Z
A Z
A Y
A X
C Y
A X
B X
A X
A Z
C Y
A Z
A X
C X
C Z
C Z
A Z
A X
A Z
C X
C Z
B Z
A Z
C Y
C Z
B X
A X
A Z
A X
A X
C Y
A Z
C Z
B X
A X
A X
A Z
A Y
A X
C X
A Z
B X
C Y
A X
A X
A X
C X
B Z
B Z
A Z
A X
A Z
C Z
C X
C Y
B X
C Z
A Z
C X
A Z
A X
A X
A X
A X
A Z
B X
A X
B X
C Z
A Z
A Z
A X
A X
A X
B X
A Z
A X
A Z
A X
B Z
A Z
A X
B Z
A Z
A Z
C Y
B Z
A Z
B Z
A Z
A X
C X
A X
C Y
C X
A X
A X
C Y
A Z
A X
B Z
A Z
A Z
B X
B Z
A X
A Z
A X
A X
A Z
A X
A Z
A Z
C X
A Z
A X
C Y
A Z
A Z
A X
A X
A X
A X
B Z
B X
A Z
A X
A Z
C Y
B Y
C Y
B X
A Z
A Z
A Z
C Y
A Z
A X
B Z
C X
A X
C Z
C X
C Y
A Z
A X
A Z
C Z
A Z
A Z
A Y
C Z
A X
A X
B Z
A Z
C Z
A Z
A X
A Z
A Z
A Z
A Z
A Z
A Z
A Z
A Z
C X
A X
A X
A X
B Y
B X
A X
A Z
A Z
A X
A Z
A X
A X
A Z
B X
A Z
C Z
A Z
C Z
A Z
A Z
C Z
A X
C Z
A X
C X
A Z
A Z
B Z
A Y
B Z
A X
B Z
A Z
A X
A Z
A Z
A X
A Z
B Z
C X
A Z
A X
B Z
C Y
B Z
C X
A Z
A Z
C X
B X
C Z
A Z
A X
A Z
C X
A Z
C Z
C Z
B Z
B Z
A Z
C X
A X
B Y
A Y
A Z
C X
B X
A Z
A Z
B Y
A Z
A Z
C Z
A Z
A X
A Z
B X
C Z
B X
A Z
B Z
C Y
A X
A X
A Z
A Z
A Z
C Y
A X
A Z
A Z
A X
B Z
A Z
C X
C Z
A Z
A X
B Z
A X
C Y
A X
A Z
A Y
C Z
A Y
A Z
C X
C Y
A Z
C Y
A Z
A X
C Y
A Z
A X
A X
B Z
A X
C X
A X
C X
A X
A Z
A X
A Z
A Z
A X
C X
C Z
A Z
C Z
C X
A Z
C Y
A X
A Z
A Z
C Y
A X
B X
C Y
B Z
C Y
A X
A X
C Z
A X
A Z
A X
A X
C X
A X
A Z
B X
C Z
A Y
B Y
A Z
A Z
A Z
A Z
B Y
A Y
A Z
B Z
A Z
A X
C Z
B Y
C Y
A X
A Z
C Z
B Z
A Z
A Z
A Y
C Z
A Z
A Z
C Z
C Z
C Z
A X
B Y
C X
A X
A Z
A Z
B Z
A Y
A X
A Z
B X
A X
A X
A Z
A Y
A Z
A X
B X
A Z
C X
A Z
A X
C X
B X
B Y
B X
A Z
A Z
A Z
A X
B X
A X
B Z
A Y
B Z
C Z
A X
C Z
C X
A Z
C Y
C Y
A Z
A X
A X
A X
B X
A Z
A Y
C Y
B X
A X
A X
A X
C Y
A Z
A Y
A X
C Z
A Z
A Z
A Z
C Z
A X
A Z
C Z
B X
C Y
A Z
B Z
B Z
C Z
C Z
A X
A Z
A Z
B X
B X
A Z
A Z
A Y
C Z
A Z
A X
C Z
A Z
C Z
C Z
A Z
A Z
B Z
A X
B Y
A Z
A X
C Z
A X
B X
A Z
C Y
A Z
C X
C Y
A X
C X
C X
A Z
C Z
C Y
A Z
A Z
A X
A X
C Z
A Y
A Z
A X
B Z
A X
A Z
A Z
A X
B Z
A X
A Z
C X
A Z
A Z
C X
A Z
A X
A Z
A X
B Z
A Z
A Z
C Y
C Y
C Z
C Z
C Y
A X
A X
A X
A Z
A Z
C Y
A Z
C Z
A Z
C Z
B Z
B X
A Y
C Y
A X
A Z
A X
A X
A Z
C Z
C Y
C Y
A Y
A X
A Z
A X
C Z
A X
A Z
A Z
C Y
A X
A Z
A Z
A X
B Y
A Z
A Z
A Z
A Z
C Y
A Z
A X
A X
A Z
A Z
C Y
A Z
A Z
B Z
A Z
A X
A X
A Y
C Z
C Z
A Z
B Z
A Z
A Z
A X
A X
C Z
A Z
A X
A X
A Z
A Z
B Y
A Y
C Y
A X
A Z
C Z
C Y
A Z
C Y
A X
A X
A X
A Z
C Y
C Y
A Z
B X
C Y
A Z
A X
A Z
A Y
C Y
C Z
B Z
A Z
C Y
A X
C Z
A X
C Y
C Z
A Z
C Y
C Y
A Y
B X
A Z
C Z
B Z
B Y
A Z
C Y
A X
A Z
A Z
C Y
A Z
C Z
A Z
A Z
A X
A Z
A Z
C Z
A X
A Z
C Z
C Y
A X
A X
C Z
C Y
A Z
C Y
A Z
A X
A X
A Z
A Z
A X
A Z
C Y
C Z
A Z
B X
C Z
A Z
A Z
A X
B X
A Z
A Y
A X
C Z
B X
A Z
C Y
C Z
C Z
C Z
A Z
A Z
A X
A Z
C Z
C Y
A X
A Z
A Z
A Y
A X
A Z
A Z
C X
B Z
A X
A Z
A X
C Z
A X
C X
A X
C Y
C Y
A X
A X
A Z
B Z
A Z
A Y
B Z
A X
C X
A X
C X
A X
C X
A Z
A X
A X
A X
C Y
A X
A X
C X
C Z
A X
B Y
A X
B Z
A Z
A X
C Z
A Z
A X
A Z
A X
C X
C Z
A X
C Z
C Y
C Y
A X
A X
A X
C Z
C Z
A Z
C Z
A Z
B Z
A Y
B Z
A X
A Z
A Z
A Z
C Z
A Z
A X
A X
B Z
A Z
C Y
C Z
B Z
C Y
C Z
A X
A X
C X
B X
C Z
A Z
A Z
C Z
A X
A Z
A Z
B X
B Z
A Z
A Z
B Z
A Z
A Z
B Z
B Z
C Z
A Z
C Z
A Z
A Z
C Z
A Z
A Z
B Z
A Z
A X
A X
A X
A Z
C Z
A X
A Z
A X
A Z
B Z
B Z
C Z
A Z
A Y
C X
A X
A Z
A X
A X
C X
C Z
B Y
A X
A X
C Y
C Y
A X
A Z
A Z
B Z
B Z
A Z
C Z
A Z
C Z
C X
A Z
A X
A Y
A X
A Z
C Z
A X
A Z
A Z
A Z
A X
C X
B Z
A Z
A Y
C X
A Z
A Z
A Z
A X
A Y
A X
C Y
A Z
C Y
A Z
A Z
C X
A Z
A Y
C Z
A X
A X
A Z
A Y
A Z
A X
C Z
A Z
A Z
B Z
A Z
A Z
C X
B Z
C Y
A X
A Y
B X
A Z
C Z
C X
C Z
A X
A X
A Z
A Z
A X
A Z
B Z
B Z
A Z
B Y
B Z
A X
A X
C Z
A Z
C Y
B Z
C Z
C Z
A Z
A X
B Z
A X
A X
A Z
A Z
A X
B Z
A Z
C Z
A Z
A Z
B X
C Z
B Z
C Y
A Z
A X
A X
B X
A X
B Z
C Y
C Y
B Z
C Y
C Y
A X
A Z
A Z
C Y
B Z
A X
A Z
A X
B X
A X
C Y
A X
A X
B Z
A X
B X
A Z
C Y
B Z
A X
A Z
A X
A X
B X
A X
A X
A X
A Z
A Z
C Y
A Z
B Z
C Z
C Y
C Z
A X
A Z
A X
C Z
C Z
C Z
C Y
A X
B X
B X
C X
C Z
C X
C Z
B Z
A Y
A X
C X
B X
A X
A X
A Z
A X
A Z
A X
A X
A Z
A Z
C Z
A X
C Y
C Y
C Z
A Z
A X
A Z
A X
A Z
A Y
A Z
A X
A X
A Z
A X
A Y
A Y
C X
A Y
C Y
C X
A Z
C Z
C Y
C Z
A Z
C X
A X
C Z
A Z
C Y
B Z
A Z
A Z
A Z
C Y
A X
A X
A Z
A Z
A Z
B Z
C Z
A X
C Y
A X
A Z
A X
C X
C Z
A Z
C Y
A Y
A Y
A Z
A X
A Z
A Y
A X
C Z
A Z
A Z
A X
A X
B Z
B Y
B Y
C X
A Z
A Z
C Z
A X
A Z
C Y
B X
C Y
A Z
A Z
A X
A Z
A X
A X
C Z
A Z
A Z
A X
A X
C Y
A X
A X
C Y
A Y
C X
A X
C Y
A Y
A Z
B Y
A X
C Z
B X
A X
C Z
A Z
B Z
A Z
A Z
C X
A Z
B Z
C X
A Z
C Y
A Z
C Z
A Z
C X
A X
A Z
A Y
B X
A X
B X
A Z
A Z
C Y
A Z
C Z
A Z
A Z
A Z
C X
A Z
B X
A X
A Z
C Z
A Z
A X
C Y
A Z
C Y
A Z
A Z
C Z
A X
A Z
A Z
B X
A Z
A X
C Z
B Y
A Z
A X
C Z
A X
A Z
A Z
A Z
C Z
A Z
A Z
C X
A X
A X
C X
A X
A X
B Z
A Z
A X
B X
A X
A Z
C Y
A Z
B X
C Y
A X
C Z
A Z
B Z
A X
A Z
A Z
C Z
A X
C Z
A X
C X
A Y
A X
A Z
C X
A X
A X
A X
A X
A Z
A X
B Z
C Z
C Y
B Z
B Z
B X
A Z
A X
B Z
A Z
A X
C Z
A Z
C Y
B Z
C Y
A X
C X
A X
A Z
C Y
A Z
A X
A Y
C Y
C Y
A Z
A Z
C Y
A Z
A Z
A X
C Y
B Y
A X
A X
A X
C Y
B X
A Z
A Y
A Z
A Z
A X
C Z
A Z
A Z
C X
A Z
B Z
B X
A X
C Z
A X
C Y
A Z
C Z
C Y
C X
C Y
A Z
A X
A Z
A Z
A Z
B Z
A Z
C Z
A Z
C Z
B Z
C Z
C Z
A Z
A Z
B X
A Z
A X
A Z
A X
A Y
A Z
B Z
C X
A Z
A Z
B X
A X
C X
C Z
A X
A Z
A X
C Y
C Z
A Z
C Y
A X
A Z
A Z
B Z
C Y
A Z
A Z
C Z
A X
C X
A Z
A Z
A Y
C Z
C Z
A Z
A X
B Z
A X
A X
A X
A X
A Z
A Z
A X
A X
C Z
C Y
C Y
C Y
A Z
C X
B Z
C Y
C Z
A X
A X
A Z
C Z
C Z
A Y
C Y
B X
C Y
A X
A X
A Y
A X
A Z
A Z
A X
A Z
A Z
A Z
A X
A Z
B Z
A X
A X
A X
C Z
C X
A Z
C Y
C Z
A X
A Z
A Z
A X
A Z
A X
B Z
A Z
A Z
A Z
C Y
C Z
B Z
A Z
B Z
A X
A X
A X
C Y
A Z
A Z
A Z
C X
A X
A X
A Z
A Z
A Z
A Z
B Z
A X
A Z
A X
C Z
A Z
A Z
A Z
B Z
A Y
A Z
C Z
B Z
C Y
A Z
A X
C Y
A X
A X
A Z
A Z
A X
B Z
B X
C Z
C Z
A Y
A Z
A X
A Z
A Z
A Z
A Z
A Z
B Z
A Z
B X
A Z
A Z
C Z
B Z
A Z
C X
B Z
C X
B Z
A Z
A Z
A Z
A Z
A X
B Z
A X
B Z
C Y
A Z
A Z
C X
A X
A Z
A Y
A Z
C Y
C X
C Z
A X
A Z
C Z
A Z
A X
A Z
B Z
A X
A Z
B Z
C Y
A Z
C Y
A Z
C Y
B X
C Y
A Z
B Z
A X
B Z
B Z
C X
A Z
C Z
A Z
C Z
A Z
C Z
B Z
C Y
C Z
A Z
C Y
A Z
C X
B Y
B Y
C X
C Y
A Z
C Z
A Z
C X
A Z
A Z
C Y
A Z
A Z
C X
A Y
A X
A X
B Z
A Z
C Z
A Z
B Z
C Y
C Z
A Z
C Y
B X
C Z
A X
C X
C Y
C Y
C Y
A Z
A Z
B Y
C Y
A Z
A X
A Z
A X
A Z
C X
C Z
A X
C Z
B X
A X
C Z
A Z
C X
A Y
A Z
A X
A Z
C Z
B Z
B Z
A Z
C Y
A Z
C Z
C Y
C Z
A Z
A Z
B X
C X
C Z
A X
A Z
A Y
C Y
A X
A Z
C Y
A Z
B X
A Z
A Z
A Z
A Z
C X
A X
A Z
A Y
A X
B Y
A X
A X
A X
A X
B Z
A X
C Y
C X
A X
A Z
A X
A Z
A Z
A Z
A Z
A X
A Z
C X
C Z
C Z
A X
B Y
A X
C Y
A X
C Z
A X
A Z
A Z
A Z
A Z
C X
A X
C Y
A Z
A Z
C Y
A Z
A X
A Z
A X
A Z
B Y
C Y
B Y
C Y
A Y
A Z
C X
B X
A X
A Y
C Z
A X
B Z
A X
A X
A Y
A X
A Z
A Z
C Z
C X
A Z
C Y
A Z
A Z
C X
A Y
A Z
A X
A Z
A Z
C X
A Z
A Z
A Z
C Y
A X
A X
A X
C Z
A Z
C Y
A X
A X
C Y
C X
C Y
A Y
C X
A Z
A Z
A Y
C X
A Z
A Z
A Z
C Y
C X
A Z
B Z
A Z
A X
C Y
A X
C Y
C Y
A X
C Y
A X
C Y
B Z
A Z
A X
A Z
A X
A X
A Z
A X
A X
C Z
A Z
B Y
C X
B X
B X
A Z
A Y
B Y
A Z
A X
A X
C Y
C X
B Z
A Z
C Y
C X
C Y
A Y
A Z
C X
A X
A X
A Z
A Z
B Z
C X
A Z
B Z
A X
B Y
C X
A X
A Y
C X
A X
C Y
A Z
A Z
A X
A X
C Z
C Z
B Z
A X
B Z
B Y
A Z
A Z
C Y
A Z
B Y
A Z
A X
C Z
C Z
A X
A X
A X
A Z
A Z
C Y
A X
A X
A Z
A X
C X
A Z
A X
B Z
B X
A X
A X
A Z
B Z
A X
A Z
C Y
C Y
B Z
C Z
A X
B X
B X
A Z
A X
A Z
C Y
A X
A X
B Y
C Y
A X
A X
C Y
A Z
A Z
C Z
A Z
B Z
A Y
A Z
C Y
B Y
A X
C X
A X
C Z
A Z
A X
A Z
A Z
A X
B Z
C Z
A Z
A X
C X
A X
C Y
B Z
B X
C Z
C X
A X
A X
A Z
A X
C Y
B Z
A Z
C Z
A Z
A Z
A X
B X
A X
A Z
A X
A X
A Z
A Z
A Y
A Z
C Z
B Z
A X
A X
A X
A Z
B Z
A Z
A Z
C Z
C Y
C Y
A Z
A X
A Z
C Z
A X
A X
A Z
A Z
C X
B Y
A X
B Z
B Z
A Z
A Z
C Z
C Z
A X
A X
A Z
C Z
A Z
C Z
B X
A X
A Z
A Z
C Z
A X
A Z
B Y
B X
A X
C Y
C X
C Y
B X
A X
C Y
A Z
B Y
A Y
A X
C Y
A Z
A Z
A Z
A Z
A Z
C Z
A Z
A Z
A Z
C X
B X
C Z
A X
B X
A X
C Y
A X
C X
A X
A Z
A Z
B X
A X
A Z
A X
C Z
A Z
A Z
A X
C Z
A Z
C X
A Z
A Z
A Z
A Z
B Z
A X
A X
C Y
A Z
A Z
B Z
A X
A Z
A Y
A Z
C X
B Z
A Z
A X
B Y
A Z
A X
C X
C X
A X
A Z
A X
A Z
B Z
B Y
A Y
A Z
C Y
B Z
A Z
C X
C Y
C Z
C X
A X
A Z
A X
A X
A Z
A X
A X
A X
A Z
C Z
C Y
A Z
A X
C X
B Z
C Z
C Y
C Y
A Z
A X
A Z
A Z
A Z
A X
A Z
A Z
A X
C Z
A X
A X
A Z
C X
B Y
A X
C Z
A X
C X
A Z
A X
A Y
C Z
A X
A Z
C X
B X
A Z
A Z
A X
A X
A Z
C Y
C Z
A X
A Z
C Z
C X
A X
A Z
A X
A X
B X
C Z
B Z
A Z
A X
A X
B Y
A Z
A X
A X
A Z
A Z
A Z
A X
C Y
A Z
C Y
A Z
A Z
A X
C Z
A Z
B X
A X
C Z
A X
A Y
B X
C X
A X
A X
A Z
A X
A X
A X
C Y
A Y
A Z
B Z
B Z
B Z
A Z
A Z
A Z
A X
B X
C Y
A X
A Z
C Z
B Y
A X
A Z
A Z
A X
A X
B Z
A X
C Y
A Z
A X
A X
A Z
A Z
A Z
A Z
A Z
A X
A Z
A X
A X
C Z
A X
C Z
A Z
C Y
A X
A Z
C Z
A Z
A Z
A X
A X
A Z
A X
A Z
B Z
A X
A X
C X
A Z
A X
A Z
C Y
C Y
C Y
C Y
C Z
A Z
B X
C Z
A X
A Z
C Y
A X
A Z
B X
A Z
C X
C Z
C X
C X
A Z
A Z
B X
A Z
A Z
A Z
B Z
A Z
C Z
A X
A X
A Z
A X
A Z
C Z
C Z
A Z
C Z
C X
A Z
A X
B Z
A X
B Y
C X
A X
A Y
A Z
A Z
A X
A X
A Z
A X
A Z
A X
A Z
A X
A Y
A X
C Z
A Z
A Z
A X
A X
A Z
A X
C Y
C Z
A Z
A Y
A Z
A X
A Z
C X
B X
A Z
C Z
B Y
A Z
A Z
C Y
A X
A Z
A Z
C Z
C Y
A Z
B Y
A X
C Y
A X
A X
A Z
C Z
A Z
A Z
A X
C Z
A X
C Y
C Y
A X
B X
C X
A Y
A X
A Z
B X
A X
B Z
A Z
A X
C X
A X
B X
A X
A Z
A X
C Y
A Z
C Z
C Y
A X
B X
C Y
C X
A X
A Z
A X
A Z
A X
A X
A Z
A Z
A X
A Z
A Y
A X
A X
A Y
A Z
A Z
C Z
A X
A Z
A X
A X
B X
A X
B Y
C Y
A Z
B Z
A Z
B Y
A Z
C Y
A Z
A X
A X
A Z
C X
C Z
B X
A X
A Z
A X
A Z
A Z
B X
A Z
A X
C Z
B Y
C Y
C X
A X
A Z
A X
C Y
A Z
C Z
A X
A X
A X
A Z
A Z
A Z
B X
C X
A Y
B Z
A X
A Z
A Z
C X
C Y
A X
A Z
C Y
A X
A Z
A X
A Z
A X
A X
B Z
A X
C X
A X
A X
A X
A Z
A Z
A X
A Z
C Y
C Z
B Z
B X
A Z
A X
C X
C Y
A X
B Z
B Z
A Z
B Z
C Y
A X
A X
A X
C Y
A Z
A X
A Z
A Z
A Z
A X
A Z
A X
A Z
C Y
A X
C X
C Y
C Y
C X
A X
C Y
A Z
C Y
B Z
B Z
C Z
A X
B X
C X
A Z
A Y
A Z
B Z
A Z
B Z
A X
A X
A Z
A Z
A Y
A Z
A X
A Y
A Z
A Z
A Z
A Z
B X
A Z
A Z
A Z
A Z
C Y
B Y
C X
A Z
B Z
B X
A X
C Z
A Z
C Z
A Z
A X
A X
A X
A X
A X
A Z
C Y
A X
C X
A Y
C X
C X
A X
A Z
A X
C Z
A X
C Y
B Z
C Y
C Z
B X
A Z
C Y
A Z
C Y
A X
A X
A X
A Z
A Z
A Z
A Z
C Z
C Y
A X
C Y
B Y
A X
A X
A Z
C Y
C Z
A X
A X
A Z
A Z
A X
A X
A Z
`
console.log(scoreCalculator(guide))
// scoreCalculator(guide)