// 3. Write a JavaScript program to get the integers in range (x, y).  Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Click me to see the solution.

function rangeCreator(a, b) {
    let output = [];
    if (b - a === 1) {
        return output;
    }
    // rangeCreator(a,b-1).concat(output);
    output.concat(rangeCreator(a,b-1));
}

console.log(rangeCreator(2,9))