// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
    let output = "";
    let i = 1;
    while (i < 11) {
      output += `${i} * ${number} = ${i * number}\n`
      i++
    }
    return output.slice(0,-1);
  }