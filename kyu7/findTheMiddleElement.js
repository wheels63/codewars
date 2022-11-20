// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme (triplet) {

    let sorted = triplet.slice().sort((a,b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else {
        return 0
      }
    })
  
    console.log(sorted)
    
    let ele = sorted[1];
    let i = triplet.indexOf(ele);
    
    return i;
}

