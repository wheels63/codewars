// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength(array) {
    let obj = {};

    for (let el of array) {
        obj[el.length] = el;
    }

    console.log(obj);
}

