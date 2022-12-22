// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript



function sumTwoSmallestNumbers(numbers) {  
    
    let sorted = numbers.sort((a,b) => {
        (a-b);
    })

    return sorted[0] + sorted[1];
}

