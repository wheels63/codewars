// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

function DNAStrand(dna){
    let outputStr = "";
    
    dna.split("").forEach(x => {
      if (x === "A") {
        outputStr += "T" 
      } else if (x === "T") {
        outputStr += "A";
      } else if (x === "C") {
        outputStr += "G";
      } else if (x === "G") {
        outputStr += "C"
      }
    })
    return outputStr;
  }