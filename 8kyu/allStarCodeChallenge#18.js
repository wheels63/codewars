// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

`
input is two strings
`

function strCount(str, letter) {
    let counter = 0;

    for (let char of str) {
        if (char === letter) counter ++;    
    }
    return counter;
}