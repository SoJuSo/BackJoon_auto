const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

for (let i = 0; i < len; i++) {
    let oneCount = 0, zeroCount = 1;
    
    for (let j = 1; j <= input[i]; j++) {
        const tmpCount = zeroCount;
       
        zeroCount = oneCount;
        oneCount = tmpCount + oneCount;
    }

    console.log(zeroCount + " " + oneCount);   
}