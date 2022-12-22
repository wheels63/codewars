// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
    
    if (a1.length === 0) {
        return -1;
    } else if (a2.length === 0) {
        return -1;
    };

    let a1Min = a1[0];
    let a1Max = a1[0];

    for (let x of a1) {
        if (a1Min.length > x.length) {
            a1Min = x;
        } else if (a1Max.length < x.length) {
            a1Max = x;
        }
    }

    let a2Min = a2[0];
    let a2Max = a2[0];

    for (let y of a2) {
        if (a2Min.length > y.length) {
            a2Min = y;
        } else if (a2Max.length < y.length) {
            a2Max = y;
        }
    }

    let first = Math.abs(a1Min.length - a2Max.length);
    let second = Math.abs(a2Min.length - a1Max.length);

    return Math.max(first, second);
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2))