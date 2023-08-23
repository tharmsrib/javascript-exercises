const fibonacci = function(number) {
    if(typeof(number)=='number' && number > 0){

        
        const fibNumbers = [1];
        let newNumber;
        for(let i = 1;i<number;i++){
            if(i==1){
                newNumber = fibNumbers[i-1];

                // console.log(typeof(newNumber));
            }else{
                newNumber = fibNumbers[i-2]+fibNumbers[i-1];
            }
            fibNumbers.push(newNumber);
            // console.log(fibNumbers);
        }
        return fibNumbers[number-1];
    }else if(typeof(number)=='number' && number < 0){
        console.log('Not possitive number')
        return "OOPS"
    }else{
        return 1
    }
};

// Do not edit below this line
module.exports = fibonacci;
