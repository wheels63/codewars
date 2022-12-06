// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let reversedArr = str.split("").reverse();
    let output = [];
    
    reversedArr.forEach( x => {
      if (alphabet.includes(x)) {
          output.push(x);
          }
      });
    
    return output.join("")
    
  }