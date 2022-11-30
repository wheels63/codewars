// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
    let output = "";
    let i = 1;
    while (i <= n) {
        output += s;
        i++;
    }
    return output;
}