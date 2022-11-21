// https://www.codewars.com/kata/5b853229cfde412a470000d0/solutions/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (sonYearsOld === 0) {return dadYearsOld}

    let ageDifference = dadYearsOld - sonYearsOld;
    
    let sonStartAge = 0;
    let dadStartAge = ageDifference;
    
    while (sonStartAge < dadYearsOld) {
      
      if (sonStartAge * 2 === dadStartAge) {
        return Math.abs(dadYearsOld - dadStartAge)
      }
      
      dadStartAge++;
      sonStartAge++;
    }
}
