// https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/javascript

function sumDigPow(a, b) {
    let output = [];
    for (let i = a; i <= b; i++) {
        helper(i) ? output.push(i) : i;
    }
    return output;
}

function helper(str) {
    let numArr = str.toString().split('');
    
    let sum = 0;

    numArr.forEach((el,i) => {
        sum += el ** (i+1);
    })

    return sum === str;
}