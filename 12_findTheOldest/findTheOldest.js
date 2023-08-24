const findTheOldest = function(input) {
    // Given an array of objects representing people with a birth and death year, return the oldest person.
    const sortedPerson = input.sort(function(person1,person2){
        const age1 = Math.abs(person1.yearOfDeath - person1.yearOfBirth);
        const age2 = Math.abs(person2.yearOfDeath - person2.yearOfBirth);
        
        

        // console.log(`name: ${person1.name} age: ${age1}`);
        if(age1 >age2){ return 1}
        else if(age1 <age2){return -1};
        return 0;
    })
    
    console.log(sortedPerson.findIndex(-1));

    return sortedPerson[-1]
};

// Do not edit below this line
module.exports = findTheOldest;
