// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x) {
    if (typeof x === 'string') {
        return "Error";
    } else {
        return 50 * x + 6;
    }
}