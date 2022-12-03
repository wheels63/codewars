// https://adventofcode.com/2022/day/3

// FIRST PART

function priorities(input){
    let rucksacksArr = input.split('\n');
    let sumOfPriorities = 0;
    let alphabetIndex = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    // console.log(rucksacksArr)
    rucksacksArr.forEach( x => {
        let twoSacks = sackDivider(x);
        let firstPart = twoSacks[0];
        let uniqueFirstPart = firstPart.split("").filter(onlyUnique)
        let secondPart = twoSacks[1];
        let uniqueSecondPart = secondPart.split("").filter(onlyUnique)
        
        // console.log(uniqueFirstPart, uniqueSecondPart)

        uniqueFirstPart.forEach( item => {
            if (uniqueSecondPart.includes(item)) {
                sumOfPriorities += alphabetIndex.indexOf(item) + 1;
                // console.log(alphabetIndex.indexOf("s"), alphabetIndex.indexOf("j"))
            }
        });
        // console.log(twoSacks, firstPart, firstPart.length, secondPart, secondPart.length,)
    });
    
    return sumOfPriorities;
}

function sackDivider(rucksack) {
    let half = rucksack.length / 2;
    let firstPart = rucksack.slice(0,half);
    let secondPart = rucksack.slice(half)
    return [firstPart,secondPart];
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


// SECOND PART