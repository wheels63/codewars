// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

function s(begin, end, step) {
    let sum = 0;
    
    for (let i = 0; i < end; i += step) {
        sum += i;
    }
    return sum;
}