// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
    let wordsArr = x.split(" ");

    let highScoreWord = wordsArr[0];
    let highScore = 0;
    let highScoreWordIndex = 0;
    
    wordsArr.forEach( (word, i) => {
        if (highScore < calculateScore(word)) {
            highScoreWord = word;
            highScore = calculateScore(word);
            highScoreWordIndex = i;
        }
    })
    
    return highScoreWord;
}

function calculateScore(word) {
    let score = 0;

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = alphabet.split("");

    for (let char of word) {
        score += alphabetArr.indexOf(char) + 1
    };

    return score;
}


// console.log(calculateScore('aaa'))

// high('man i need a taxi up to ubud') //, 'taxi');
// high('what time are we climbing up the volcano') //, 'volcano'); 
// high('take me to semynak') //, 'semynak');   
// high('aa b') //, 'aa');
// high('b aa') //, 'b');
// high('bb d') //, 'bb');
// high('d bb') //, 'd');
// high('aaa b') //, 'aaa');

// console.log(calculateScore('tbtxwvzspglsafpampyjcxey'))
// console.log(calculateScore('sxjfuspfkbdcktpxqkpzyquv'))
// console.log(high('sxjfuspfkbdcktpxqkpzyquv tbtxwvzspglsafpampyjcxey'))
// 'tbtxwvzspglsafpampyjcxey' to equal 'sxjfuspfkbdcktpxqkpzyquv'

// console.log(high("crejmfzlwzibcrvginim eupgukepergtmmkfpvht xpejwnkjuykizglktjqh oofrfzfjyrzgpnvbtpaf"))
// console.log(`${calculateScore("oofrfzfjyrzgpnvbtpaf")} is 279`)
console.log(calculateScore("xpejwnkjuykizglktjqh"))

 //: expected 'oofrfzfjyrzgpnvbtpaf' to equal 'xpejwnkjuykizglktjqh'