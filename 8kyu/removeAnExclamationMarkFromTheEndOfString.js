// https://www.codewars.com/kata/57fae964d80daa229d000126/solutions/javascript

function remove(string) {
    if (string[string.length-1] === "!") {
        return string.slice(0,string.length-1);
    }
    return string
}

