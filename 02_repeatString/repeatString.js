const repeatString = function(inputString,numRepeat) {
    if (numRepeat < 0) return "ERROR";
    let outputString = "";
    
    for(let i=0;i<numRepeat;i++){
        outputString += inputString;
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
