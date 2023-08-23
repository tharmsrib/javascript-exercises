const palindromes = function (input) {
    //convert to lower case
    let string = input.toLowerCase();
    //remove spaces
    string = string.replace(/[^a-zA-Z0-9]/g,'');
    reverseString = reverse(string);
    

    console.log(reverseString);
    //cmp 
    if(string == reverseString){
        return true;
    }else{
        return false;
    }
};
function reverse(s){
    return s.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
