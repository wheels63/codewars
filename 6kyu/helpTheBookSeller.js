// https://www.codewars.com/kata/54dc6f5a224c26032800005c/solutions/javascript

function stockList(b, c){

    let outputObj = [];

    for (let i = 0; i < b.length; i++) {
        
        let el = b[i];
        let splitEl = el.split(" ");
        let targetChar = splitEl[0][0];
        let qnty = Number(splitEl[1]); // this is when you realize you're parsing through an integer version of the input

        if (outputObj.hasOwnProperty(targetChar)) {
            outputObj[targetChar] += qnty; // keep in mind of dot notation vs bracket notation
        } else {
            outputObj[targetChar] = qnty;
        }
        
    }

    let falseCounter = 0;
    
    for (let property in outputObj) {
        falseCounter += outputObj[property];
    }

    if (falseCounter === 0) {
        return '';
    }
    

    let outputStr = "";

    for (let k = 0; k < c.length; k++) {
        
        let snippet = ""

        let charC = c[k];
        
        if (outputObj.hasOwnProperty(charC)) {
            snippet += `(${charC} : ${outputObj[charC]})`
        } else {
            snippet += `(${charC} : 0)`
        }
        outputStr += snippet;
    }
    return outputStr.split(")(").join(") - (")
}

b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]

console.log(stockList(b, c))

